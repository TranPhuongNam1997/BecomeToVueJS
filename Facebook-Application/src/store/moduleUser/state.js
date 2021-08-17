export default{
    hackUser : {},
    ACCESS_TOKEN: localStorage.getItem('ACCESS_TOKEN'),
    currentUser: null,
    

    //đầu tiên là get listUsers sau đó dùng users[USERID] để tìm ra user đó
    users: {},

    // get PostUserId  posts[USERID]
    posts:{}
    
}