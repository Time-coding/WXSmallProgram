App({
    //全局变量存储
    globalData: {
        g_isPlayingMusic: false,
        g_currentMusicPostId: null,
        doubanBase: "http://api.douban.com"
    },
    //也可在这里获取用户userinfo
    // onLaunch: function () {
    //     wx.login({
    //         success: function (res) {
    //             if (res.code) {
    //                 //发起网络请求
    //                 wx.request({
    //                     url: 'https://test.com/onLogin',
    //                     data: {
    //                         code: res.code
    //                     }
    //                 })
    //             } else {
    //                 console.log('获取用户登录态失败！' + res.errMsg)
    //             }
    //         }
    //     });
    // }
})