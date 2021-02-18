import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetMetaData(props) {
    console.log(props)
    let currentUrl = window.location.href;
    let quote = props.quote !== undefined ? props.quote : props.bookName;
    let title = props.bookName;
    //let image = props.image != " " ? props.image : "https://storage.googleapis.com/cmperstribe_storage_usha/Banner/IMG_3640.JPG";
    let description = props.description !== undefined ? props.description : props.bookName;
    return (
        <Helmet>
            <meta property="og:title" content={title} />
         <meta property="og:image" content="https://p7.hiclipart.com/preview/831/479/764/ibooks-computer-icons-ios-apple-app-store-sparito-lo-scaffale-sono-rimaste-le-pagine-aperte-i-colori-cambiano-thumbnail.jpg" />
            <meta content="image/*" property="og:image:type" />
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta property="url" content={currentUrl} />
            <meta property="title" content={title} />
            <meta property="quote" content={quote} />
            {/* <link rel="apple-touch-icon" href="" data-react-helmet="true" /> */}
            <meta name="description" content={title} />
            {/* <meta rel="icon" href="https://w7.pngwing.com/pngs/808/1018/png-transparent-e-book-computer-icons-reading-book-icon-angle-reading-logo-thumbnail.png" /> */}
            <meta property="og:url" content={currentUrl} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </Helmet>
    );
}
