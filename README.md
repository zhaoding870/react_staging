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