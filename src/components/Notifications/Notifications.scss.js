/**
 * jQuery toast plugin created by Kamran Ahmed copyright MIT license 2014
 */
jq - toast - wrap;
{
    display: block;
    position: fixed;
    width: 250;
    px;
    pointer - events;
    none;
    important;
    margin: 0;
    padding: 0;
    letter - spacing;
    normal;
    z - index;
    9000;
    important;
    jq - toast - single;
    {
        display: block;
        box - shadow;
        1;
        px;
        0;
        px;
        30;
        px;
        rgba(0, 0, 0, 0.1);
        width: 100 % ;
        padding: 15;
        px;
        margin: 0;
        px;
        0;
        px;
        5;
        px;
        font - size;
        12;
        px;
        font - family;
        arial, sans - serif;
        line - height;
        17;
        px;
        position: relative;
        pointer - events;
        all;
        important;
        h2;
        {
            font - family;
            arial, sans - serif;
            font - size;
            14;
            px;
            margin: 0;
            px;
            0;
            px;
            7;
            px;
            background: none;
            color: inherit;
            line - height;
            inherit;
            letter - spacing;
            normal;
        }
        a;
        {
            color: ;
            eee;
            text - decoration;
            none;
            font - weight;
            bold;
            border - bottom;
            1;
            px;
            solid;
            white;
            padding - bottom;
            3;
            px;
            font - size;
            12;
            px;
        }
        close - jq - toast - single;
        {
            position: absolute;
            top: 3;
            px;
            right: 7;
            px;
            font - size;
            14;
            px;
            cursor: pointer;
        }
        jq - toast - loader;
        {
            display: block;
            position: absolute;
            bottom: -3;
            px;
            height: 5;
            px;
            left: 0;
            border - radius;
            5;
            px;
            background: ;
            ff6849;
            animation - name;
            loader;
            animation - duration;
            3;
            s;
        }
        jq - toast - loaded;
        {
            width: 100 % ;
        }
    }
    jq - icon - info;
    {
        background - color;
        01;
        c0c8;
        color: ;
        fff;
        background - image;
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=');
        border - color;
        bce8f1;
    }
    jq - icon - success;
    {
        background - color;
        00;
        c292;
        color: ;
        fff;
        background - image;
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==');
        border - color;
        d6e9c6;
    }
    jq - icon - warning;
    {
        background - color;
        fec107;
        color: ;
        fff;
        background - image;
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=');
        border - color;
        faebcc;
    }
    jq - icon - error;
    {
        background - color;
        e46a76;
        color: ;
        fff;
        background - image;
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=');
        border - color;
        ebccd1;
    }
    jq - has - icon;
    {
        padding: 10;
        px;
        10;
        px;
        10;
        px;
        50;
        px;
        background - repeat;
        no - repeat;
        background - position;
        10;
        px;
    }
}
loader;
{
    from;
    {
        width: 0 % ;
    }
    to;
    {
        width: 100 % ;
    }
}
jq - toast - wrap * {
    margin: 0,
    padding: 0
}
    .jq - toast - wrap.bottom - left;
{
    bottom: 20;
    px;
    left: 20;
    px;
}
jq - toast - wrap.bottom - right;
{
    bottom: 20;
    px;
    right: 40;
    px;
}
jq - toast - wrap.top - left;
{
    top: 20;
    px;
    left: 20;
    px;
}
jq - toast - wrap.top - right;
{
    top: 20;
    px;
    right: 40;
    px;
}
