﻿
namespace WickedSick.Server.XamlParser.Elements.Documents
{
    [Element(NullstoneNamespace = "Fayde.Documents")]
    public class Span : Inline
    {
        public static readonly PropertyDescription InlinesProperty = PropertyDescription.Register("Inlines", typeof(InlineCollection), typeof(Span), true);
    }
}