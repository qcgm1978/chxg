module.exports = {
    // 模块介绍
    summary: 'my customized rule for AnyProxy',
    // 发送请求前拦截处理
    *beforeSendRequest(requestDetail) { /* ... */ },
    // 发送响应前处理
    *beforeSendResponse(requestDetail, responseDetail) { /* ... */
        if (requestDetail.url === 'https://drawtogether.googleminiapps.cn/endlessGame/start') {
            let newResponse = Object.assign({}, responseDetail.response);
            let body = JSON.parse(newResponse.body.toString());
            body.challengeWords = new Array(333).fill('line')
            newResponse.body = JSON.stringify(body);
            return { response: newResponse }
        }
    },
    // 是否处理https请求
    *beforeDealHttpsRequest(requestDetail) { /* ... */
        return true;
    },
    // 请求出错的事件
    *onError(requestDetail, error) { /* ... */ },
    // https连接服务器出错
    *onConnectError(requestDetail, error) { /* ... */ }
};