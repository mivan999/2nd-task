import { makeAutoObservable } from "mobx";

export default class VideoStore {
  constructor() {
    this._id = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._videos = [];

    makeAutoObservable(this);
  }

  setVideo(videos) {
    this._videos = videos;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }
  setLimit(limit) {
    this._limit = limit;
  }
  getPage() {
    return this._page;
  }
  getTotalcount() {
    return this._totalCount;
  }
  getLimit() {
    return this._limit;
  }
  getVideo() {
    return this._videos;
  }
}
