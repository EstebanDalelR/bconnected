import React from 'react';

import Head from 'next/head';

const AppHead = () => {
    return (
        <Head>
            <meta charset="utf-8" />
            <title>B - Connected</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <link href="/css/flexslider.min.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/line-icons.min.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/elegant-icons.min.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/theme-tronic.css" rel="stylesheet" type="text/css" media="all" />
            <link href="/css/custom.css" rel="stylesheet" type="text/css" media="all" />
            {/* <!--[if gte IE 9]> */}
            <link rel="stylesheet" type="text/css" href="css/ie9.css" />
            {/* <![endif]--> */}
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700%7CRaleway:700' rel='stylesheet' type='text/css' />
            <link href="/style.css" rel="stylesheet" type="text/css" media="all" />
        </Head>
    );
};

export default AppHead;