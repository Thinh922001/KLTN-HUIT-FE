import showErrorToast from 'app/components/Toast/components/Toast-error';
import { selectProductId } from 'app/pages/DetaiItem/slice/selector';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL } from 'utils/url';
import { get, post } from 'utils/url/custom-request';
import { CommentBoxAction } from '.';
import {
  selectCommentIdChosen,
  selectCommentStore,
  selectFullName,
  selectImages,
  selectPhone,
  selectReactType,
  selectSkip,
  selectStartRate,
  selectTake,
} from './selector';
import { createFormDataCmt } from 'utils/string';
import { CmtSuccess } from 'app/components/Toast';
import { isAuthenticated } from 'utils/url/local-storage';

export function* getComment() {
  try {
    const take = yield select(selectTake);

    const skip = yield select(selectSkip);

    const productId = yield select(selectProductId);

    const data = yield call(get, `${BASE_URL}/comment`, {
      params: {
        productId,
        take,
        skip,
      },
    });

    yield put(CommentBoxAction.commentLoaded(data.data.data.data));

    yield put(CommentBoxAction.setTotal(data.data.data.paging.total));
  } catch (error) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* createComment() {
  try {
    const productId = yield select(selectProductId);
    const comment = yield select(selectCommentStore);
    const images = yield select(selectImages);
    const phone = yield select(selectPhone);
    const fullName = yield select(selectFullName);
    const rating = yield select(selectStartRate);

    const authType = yield isAuthenticated() ? 'AUTH' : 'NO_AUTH';

    const formData: FormData = yield call(createFormDataCmt, {
      productId,
      comment,
      phone,
      fullName,
      images,
      rating,
      type: authType,
    });

    yield call(post, `${BASE_URL}/comment`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    yield put(CommentBoxAction.createCmtLoaded());
    CmtSuccess();
  } catch (error: any) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* reaction() {
  try {
    delay(500);
    const commentId = yield select(selectCommentIdChosen);
    const reactionType = yield select(selectReactType);
    const productId = yield select(selectProductId);

    yield call(post, `${BASE_URL}/user-reaction`, {
      productId: Number(productId),
      commentId,
      reactionType,
    });

    yield put(CommentBoxAction.reactLoaded());
  } catch (error: any) {
    yield put(CommentBoxAction.setReactLoading(false));
  }
}

export function* StatisticComment() {
  try {
    const productId = yield select(selectProductId);
    const data = yield call(get, `${BASE_URL}/comment/statistic`, {
      params: {
        productId,
      },
    });

    yield put(
      CommentBoxAction.ratingLoaded({
        avgRating: data.data.data.avgRating,
        ratings: data.data.data.ratings,
      }),
    );
  } catch (error) {
    yield put(
      CommentBoxAction.ratingLoaded({
        avgRating: 0,
        ratings: [],
      }),
    );

    showErrorToast('Có lỗi xảy ra');
  }
}

export function* boxCommentFromSaga() {
  yield takeLatest(CommentBoxAction.loadComment, getComment);
  yield takeLatest(CommentBoxAction.loadCreateCmt, createComment);
  yield takeLatest(CommentBoxAction.LoadMoreComment, getComment);
  yield takeLatest(CommentBoxAction.loadingReaction, reaction);
  yield takeLatest(CommentBoxAction.loadingRating, StatisticComment);
}
