const title = 'Ｂｅａｓｔ',
    loading = ['|','/','-','\\'];

var loadingChar = loading[0],
    currentTitle = title,
    a = 0,
    b = 1,
    c = 0,
    d = 1;

var titleInterval = setInterval(() => {
    loadingChar = loading[c % 4];
    if (d == 1) {
        currentTitle = title.substring(a%title.length, title.length);
        if (a%title.length == title.length-1) d *= -1;
        document.title = `${loadingChar} ${currentTitle.length < 5 ? currentTitle + '\u2000'.repeat(2*(5-currentTitle.length)) : currentTitle} ${loadingChar}`;
    } else {
        currentTitle = title.substring(0, a%title.length);
        if (a%title.length == title.length-1) d *= -1;
        document.title = `${loadingChar} ${currentTitle.length < 5 ? '\u2000'.repeat(2*(5-currentTitle.length)) + currentTitle : currentTitle} ${loadingChar}`;
    }
    a += b;
    c++;
}, 250);