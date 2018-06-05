$(function () {
    var st = 180;
    $('#nav_all>li').mouseenter(function () {
        $(this).find('ul').stop(false, true).slideDown(st);
    }).mouseleave(function () {
        $(this).find('ul').stop(false, true).slideUp(st);
    });

    $("#favorites").click(function () {　　　　//$里面是链接的id
        var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
        if (document.all) {
            window.external.addFavorite('http://www.baidu.com', '百度')
        } else if (window.sidebar) {
            window.sidebar.addPanel('百度', 'http://www.baidu.com', "")
        } else {　　　　//添加收藏的快捷键
            alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
        }
    });

    $("#addHomePage").click(function () {
        if (document.all) {//设置IE
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(document.URL);
        } else {//网上可以找到设置火狐主页的代码，但是点击取消的话会有Bug，因此建议手动设置
            alert("设置首页失败，请手动设置！");
        }
    })
});