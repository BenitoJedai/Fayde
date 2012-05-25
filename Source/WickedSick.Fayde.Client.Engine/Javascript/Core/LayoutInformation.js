/// <reference path="../Runtime/Nullstone.js" />
/// <reference path="../Primitives/Rect.js"/>
/// CODE
/// <reference path="../Primitives/Size.js"/>
/// <reference path="../Primitives/Point.js"/>
/// <reference path="../Media/Geometry.js"/>
/// <reference path="UIElement.js"/>
/// <reference path="DependencyProperty.js"/>

//#region LayoutInformation
var LayoutInformation = Nullstone.Create("LayoutInformation");

//#region Dependency Properties

LayoutInformation.LayoutClipProperty = DependencyProperty.RegisterAttachedCore("LayoutClip", function () { return Geometry; }, LayoutInformation);
LayoutInformation.GetLayoutClip = function (d) {
    return d.$GetValue(LayoutInformation.LayoutClipProperty);
};
LayoutInformation.SetLayoutClip = function (d, value) {
    d.$SetValue(LayoutInformation.LayoutClipProperty, value);
};

LayoutInformation.LayoutExceptionElementProperty = DependencyProperty.RegisterAttachedCore("LayoutExceptionElement", function () { return UIElement; }, LayoutInformation);
LayoutInformation.GetLayoutExceptionElement = function (d) {
    return d.$GetValue(LayoutInformation.LayoutExceptionElementProperty);
};
LayoutInformation.SetLayoutExceptionElement = function (d, value) {
    d.$SetValue(LayoutInformation.LayoutExceptionElementProperty, value);
};

LayoutInformation.LayoutSlotProperty = DependencyProperty.RegisterAttachedCore("LayoutSlot", function () { return Rect; }, LayoutInformation, new Rect());
LayoutInformation.GetLayoutSlot = function (d) {
    return d.$GetValue(LayoutInformation.LayoutSlotProperty);
};
LayoutInformation.SetLayoutSlot = function (d, value) {
    d.$SetValue(LayoutInformation.LayoutSlotProperty, value);
};

LayoutInformation.PreviousConstraintProperty = DependencyProperty.RegisterAttachedCore("PreviousConstraint", function () { return Size; }, LayoutInformation);
LayoutInformation.GetPreviousConstraint = function (d) {
    return d.$GetValue(LayoutInformation.PreviousConstraintProperty);
};
LayoutInformation.SetPreviousConstraint = function (d, value) {
    d.$SetValue(LayoutInformation.PreviousConstraintProperty, value);
};

LayoutInformation.FinalRectProperty = DependencyProperty.RegisterAttachedCore("FinalRect", function () { return Rect; }, LayoutInformation);
LayoutInformation.GetFinalRect = function (d) {
    return d.$GetValue(LayoutInformation.FinalRectProperty);
};
LayoutInformation.SetFinalRect = function (d, value) {
    d.$SetValue(LayoutInformation.FinalRectProperty, value);
};

LayoutInformation.LastRenderSizeProperty = DependencyProperty.RegisterAttachedCore("LastRenderSize", function () { return Size; }, LayoutInformation);
LayoutInformation.GetLastRenderSize = function (d) {
    return d.$GetValue(LayoutInformation.LastRenderSizeProperty);
};
LayoutInformation.SetLastRenderSize = function (d, value) {
    d.$SetValue(LayoutInformation.LastRenderSizeProperty, value);
};

LayoutInformation.VisualOffsetProperty = DependencyProperty.RegisterAttachedCore("VisualOffset", function () { return Point; }, LayoutInformation);
LayoutInformation.GetVisualOffset = function (d) {
    return d.$GetValue(LayoutInformation.VisualOffsetProperty);
};
LayoutInformation.SetVisualOffset = function (d, value) {
    d.$SetValue(LayoutInformation.VisualOffsetProperty, value);
};

//#endregion

Nullstone.FinishCreate(LayoutInformation);
//#endregion