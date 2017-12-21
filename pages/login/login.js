Page({
    data: {
        //用户信息Object
        userInfo: '',
        nickName: "",//用户昵称
        avatarUrl: "", //用户头像
        gender: "",//用户性别
        province: "",//用户所在省份
        city: "",
        country: ""
    },
    onTap: function (event) {
        //switchTab 跳转到tab页面，关闭所有非tab页面
        wx.switchTab({
            url: "../posts/post"
        });
    },
    onLoad: function () {
        let that = this;
        wx.getUserInfo({
            success: function (res) {
                const userInfo = res.userInfo;
                that.setData({
                    nickName: userInfo.nickName,
                    avatarUrl: userInfo.avatarUrl,
                    gender: userInfo.gender,//性别 0：未知、1：男、2：女
                    province: userInfo.province,
                    city: userInfo.city,
                    country: userInfo.country
                })
            }
        })
    }
})