/// <reference path="../Core/DependencyObject.ts" />

module Fayde.Navigation {
    export class UriMapper extends DependencyObject {
        static UriMappingsProperty = DependencyProperty.RegisterImmutable<XamlObjectCollection<UriMapping>>("UriMappings", () => XamlObjectCollection, UriMapper);
        UriMappings: XamlObjectCollection<UriMapping>;

        static Annotations = { ContentProperty: UriMapper.UriMappingsProperty };

        constructor() {
            super();
            UriMapper.UriMappingsProperty.Initialize(this);
        }

        MapUri(uri: Uri): Uri {
            var enumerator = this.UriMappings.GetEnumerator();
            var mapped: Uri;
            while (enumerator.MoveNext()) {
                mapped = enumerator.Current.MapUri(uri);
                if (mapped)
                    return mapped;
            }
            return uri;
        }
    }
    Fayde.RegisterType(UriMapper, {
        Name: "UriMapper",
        Namespace: "Fayde.Navigation",
        XmlNamespace: Fayde.XMLNS
    });
}