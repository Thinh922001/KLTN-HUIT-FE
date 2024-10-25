import showErrorToast from 'app/components/Toast/components/Toast-error';
import { selectProductId } from 'app/pages/DetaiItem/slice/selector';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL } from 'utils/url';
import { get, post } from 'utils/url/custom-request';
import { CommentBoxAction } from '.';
import {
  selectCommentStore,
  selectFullName,
  selectImages,
  selectPhone,
  selectSkip,
  selectStartRate,
  selectTake,
} from './selector';
import { createFormDataCmt } from 'utils/string';
import { CmtSuccess } from 'app/components/Toast';

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

    const formData: FormData = yield call(createFormDataCmt, {
      productId,
      comment,
      phone,
      fullName,
      images,
      rating,
    });

    yield call(post, `${BASE_URL}/comment`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    yield put(CommentBoxAction.createCmtLoaded());
    CmtSuccess();
  } catch (error) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* boxCommentFromSaga() {
  yield takeLatest(CommentBoxAction.loadComment, getComment);
  yield takeLatest(CommentBoxAction.loadCreateCmt, createComment);
  yield takeLatest(CommentBoxAction.LoadMoreComment, getComment);
}
