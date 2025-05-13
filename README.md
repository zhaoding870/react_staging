## 三、路由的基本使用
    1. 明确好界面中的导航区，展示区
    2. 导航区的a标签改为Link标签
        <Link to="xxxx">Demo</Link>
    3. 展示区写Route标签进行路径匹配
        <Route path="xxxx" component={Demo}/>
    4. App 最外侧包裹了一个 <BrowserRouter> 或者 <HashRouter>

## 四、路由组件和一般组件
    1. 写法不同
        一般组件： <Demo/>
        路由组件: <Route path="/demo" component={Demo}>
    2. 存放位置不同
        一般组件： components
        路由组件： pages
    3. 接收到的props 不同
        一般组件： 写组件标签时，传递了什么，就能接收到什么
        路由组件： 接收到三个固定属性
            history:
                    go: f go(n)
                    goBack: f goBack()
                    goForward: f goForward()
                    push: f push(path, state)
                    replace: f replace(path, state)
            location:
                    pathname: "/about"
                    search: ""
                    state: undefined
            match:
                    params: {}
                    path: "/about"
                    url: "/about"

## 五、NavLink 与封装 NavLink
    1. NavLink 可以实现路由链接的高亮，通过 activeClassName 指定样式名
    2. 标签体内容是一个特殊的标签属性
    3. 通过 this.props.children 可以获取标签体内容

## 六、Switch 的使用
    1. 通常情况下，path 和 component 是一一对应关系
    2. Switch 可以提高路由匹配效率（单一匹配）

## 七、解决多级路径刷新页面样式丢失问题
    1. public/index.html 中引入样式时不写 ./ 写 / (常用)
    2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%/ （常用）
    3. 使用 HashRouter

## 八、路由的严格匹配与模糊匹配
    1. 默认使用的是模糊匹配（输入的路径必须保护匹配的路径，而且顺序必须一致）
    2. 开启严格匹配： <Route exact path="home" component={Home} />
    3. 严格匹配不要随便开启，需要的时候再打开，有些时候开启会导致无法继续匹配二级路由
    
## 九、Redirect 的使用
    1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由
    2. 具体编码
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/about"/>
        </Switch>

## 十、 路由嵌套
    1. 注册子路由时，要写上父路由的path值
    2. 路由的匹配时按照路由注册的顺序进行的

## 十一、 向路由组件传递参数
    1. params 参数
        路由链接（携带参数）：<Link to={`/home/message/detail/${id}`}>{messageObj.title}</Link>
        注册路由（声明接收）：<Route to='/home/message/detail/:id' component={Detail}/>
        接收参数： const {id} = this.props.match.params
    2. search 参数
        路由链接（携带参数）：<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
        注册路由（无需声明，正常注册即可）：<Route path="/home/message/detail" component={Detail}/>
        接收参数：const {search} = this.props.location
        备注：接收到的search参数是urlencoded编码字符串，需要借助querystring解析
    3. state 参数
        路由链接（携带参数）：<Link to={{pathname:'/home/message/detail', state:{id:msgObj.id， title:msgObj.title}}}>{msgObj.title}</Link>
        注册路由（无需声明，正常注册即可）：<Route path="/home/message/detail" component={Detail}/>
        接收参数：const {state} = this.props.location
        备注：刷新也可以携带参数

## 十二、 编程式路由
    使用如下方法实现编程式路由
        this.props.history.replace()
        this.props.history.push()
        this.props.history.goBack()
        this.props.history.goForward()
        this.props.history.go(n)

## 十三、 BrowserRouter 和 HashRouter 的区别
        1. 底层原理不一样
            BrowserRouter 使用的是H5的history API,不兼容IE9及以下版本
            HashRouter 使用的URL的Hash值
        2. path 表现形式不一样
            BrowserRouter 的路径中没有#，例如：http://localhost:3000/home/news
            HashRouter 的路径中包含#，例如： http://localhost:3000/#/home/news
        3. 刷新后对 state 参数的影响
            BrowserRouter 没有任何影响，因为 state 保存在history 对象中
            HashRouter 刷新后会导致路由state参数的丢失
        4. 备注： HashRouter 可以解决一些路径错误的相关问题
