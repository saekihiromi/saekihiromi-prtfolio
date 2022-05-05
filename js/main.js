Vue.createApp({
    data() {
        return{
            open: false,
            image:'./img/print__main.png',
            imageSp:'./img/name-plate.png',
            webImage:'./img/wooden__big.png',
            webImageSp:'./img/woden.png',
            webURL:' https://saekihiromi.github.io/portfolio1/',
            webTitle:'Wooden Studio',
            webSkill:'HTML / CSS / Sass / JS / JQuery / Vue.js / Xd',
            webExplanation:'家具屋',
            appImage:'./img/task-app__big.png',
            appImageSp:'./img/task-app.png',
            appURL:'https://task-app-1dfc7.web.app/',
            appTitle: 'Task App',
            appSkill:'Vue.js / FireBase',
            appExplanation:'タスク管理アプリです。',
        }

    },
    methods: {
        toggleButton(){
            this.open = !this.open
        },
        selectOne(){
            this.image = './img/print__main.png'
            this.imageSp = './img/name-plate.png'
        },
        selectTwo(){
            this.image = './img/print__main.png'
            this.imageSp = './img/print1.png'
        },
        selectThree(){
            this.image = './img/print__main.png'
            this.imageSp = './img/print2.png'
        },
        selectWeb0(){
            this.webImage = './img/wooden__big.png'
            this.webImageSp = './img/woden.png'
            this.webURL = ' https://saekihiromi.github.io/portfolio1/'
            this.webTitle = 'Wooden Studio'
            this.webSkill = 'HTML / CSS / Sass / JS / JQuery / Vue.js / Xd'
            this.webExplanation = '家具屋'
        },
        selectWeb1(){
            this.webImage = './img/web1_big.png'
            this.webImageSp = './img/web1.png'
            this.webURL = ' https://saekihiromi.github.io/myportfolio2/'
            this.webTitle = 'Artist portfolio'
            this.webSkill = 'HTML / CSS / Sass / XD'
            this.webExplanation = 'アーティスト'
        },
        selectWeb2(){
            this.webImage = './img/web2-big-img.png'
            this.webImageSp = './img/web2.png'
            this.webURL = 'https://saekihiromi.github.io/portfolio3/'
            this.webTitle = 'portfolio'
            this.webSkill = 'HTML / CSS'
            this.webExplanation = '簡単なHP'
        },
        selectApp0(){
            this.appImage = './img/task-app__big.png'
            this.appImageSp = './img/task-app.png'
            this.appURL = 'https://task-app-1dfc7.web.app/'
            this.appTitle = 'Task App'
            this.appSkill = 'Vue.js / FireBase'
            this.appExplanation = 'タスク管理アプリです。'
        },
        selectApp1(){
            this.appImage = './img/app1__big.png'
            this.appImageSp = './img/app1.png'
            this.appURL = 'https://saekihiromi.github.io/count-click/'
            this.appTitle = 'Count Click'
            this.appSkill = 'Vue.js '
            this.appExplanation = 'カウントアプリです。'
        },
        selectApp2(){
            this.appImage = './img/app2__big.png'
            this.appImageSp = './img/app2.png'
            this.appURL = 'https://saekihiromi.github.io/message-board-old/'
            this.appTitle = 'みんなの伝言板'
            this.appSkill = 'Vue.js '
            this.appExplanation = '掲示板アプリです。DB未実装'
        },



    }

}).mount('#app')