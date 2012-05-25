﻿/// <reference path="../ImageSource.js"/>
/// CODE

//#region BitmapSource
var BitmapSource = Nullstone.Create("BitmapSource", ImageSource);

BitmapSource.Instance.Init = function () {
    this.Init$ImageSource();
    this.ResetImage();
};

//#region Dependency Properties

BitmapSource.IntGreaterThanZeroValidator = function (instance, propd, value, error) {
    if (typeof value !== "number")
        return false;
    return value > 0;
};

BitmapSource.PixelWidthProperty = DependencyProperty.RegisterFull("PixelWidth", function () { return Number; }, BitmapSource, 0, null, null, null, BitmapSource.IntGreaterThanZeroValidator);
BitmapSource.PixelHeightProperty = DependencyProperty.RegisterFull("PixelHeight", function () { return Number; }, BitmapSource, 0, null, null, null, BitmapSource.IntGreaterThanZeroValidator);

Nullstone.AutoProperties(BitmapSource, [
    BitmapSource.PixelWidthProperty,
    BitmapSource.PixelHeightProperty
]);

//#endregion

BitmapSource.Instance.ResetImage = function () {
    this._Image = new Image();
    var bs = this;
    this._Image.onerror = function (e) { bs._OnErrored(e); };
    this._Image.onload = function (e) { bs._OnLoad(e); };
    this.PixelWidth = 0;
    this.PixelHeight = 0;
};
BitmapSource.Instance.UriSourceChanged = function (oldValue, newValue) {
    this._Image.src = newValue.toString();
};

BitmapSource.Instance._OnErrored = function (e) {
    Info("Failed to load: " + this._Image.src.toString());
    if (this._ErroredCallback)
        this._ErroredCallback(e);
};
BitmapSource.Instance._OnLoad = function (e) {
    this.PixelWidth = this._Image.naturalWidth;
    this.PixelHeight = this._Image.naturalHeight;
    if (this._LoadedCallback)
        this._LoadedCallback(e);
};

Nullstone.FinishCreate(BitmapSource);
//#endregion