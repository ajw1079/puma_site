//전역 컴포넌트 등록
Vue.component("header-el", {
    data : () => {
        return {
        menu_item : [
            "Men", "Women", "New Arrivals", "Kids", "Collaborations", "Sport", "Outlet",
        ],
        sns_item : [
            "search_icon.png", "fav_icon.png", "id_icon.png"
        ]}
    },

    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <a href=""><img src="./img/logo_puma_white.png" alt=""></a>
            </div>
            <nav>
                <ul>
                    <li v-for="list in menu_item"><a href="">{{list}}</a></li>
                </ul>
            </nav>
            <div class="mypage">
                <ul>
                    <li  v-for="icon in sns_item"><a href=""><img v-bind:src="'./img/sns/'+icon" alt=""></a></li>

                </ul>
            </div>
        </div>
    </header>
    `
});


Vue.component("banner-el", {
    template : `
    <section id="main_banner">
        <iframe class="movie_space" src="https://www.youtube.com/embed/iWI_uBH6R1g?rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=iWI_uBH6R1g&amp;mute=1&amp;controls=0&amp;modestbranding=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="video_cover">
            <a href=""><img src="./img/scroll_down.gif" alt=""></a>
        </div>
    </section>
    `
});


Vue.component("arrivals-el", {
    data : () => {
        return {pd_item : [
            {pdImg:"new_01_01.jpg", pdTit:"KING Platinum 21 FG/AG", pdTxt:"Men's Soccer Cleats"},
            {pdImg:"new_02_01.jpg", pdTit:"FUSE", pdTxt:"Training Shoes"},
            {pdImg:"new_03_01.jpg", pdTit:"Suede RE.GEN", pdTxt:"Sneakers"},
            {pdImg:"new_04_01.jpg", pdTit:"Leadcat", pdTxt:"G Sandals"},
            {pdImg:"new_05_01.jpg", pdTit:"COOLADAPT", pdTxt:"Women’s Running Tank Top"},
            {pdImg:"new_06_01.jpg", pdTit:"Sonora Waist", pdTxt:"BAG 2.0"},
            {pdImg:"new_07_01.jpg", pdTit:"High Court Regal Mid", pdTxt:"Women's Sneakers"},
            {pdImg:"new_08_01.jpg", pdTit:"Cali Star Rainbow", pdTxt:"Women's Sneakers"},
            {pdImg:"new_09_01.jpg", pdTit:"RS-Z Red", pdTxt:"CAMPUS"},
            {pdImg:"new_10_01.jpg", pdTit:"MB.01", pdTxt:"BUZZ CITY"},
        ]}
    },
    template : `
    <section id="newArrivals">
        <div class="wrap">
            <h2>New Arrivals</h2>

            <div class="content">
                <div class="box">
                    <div class="bxbg">
                        <div class="intro">
                            <h3>Products Launch</h3>
                            <p>Stay in the know with the latest drops and upcoming launches, plus early access to PUMA exclusives. Catch it here first.</p>
                        </div>
                    </div>
                </div>

                <div v-for="list in pd_item" class="box">
                    <div class="bxbg" v-bind:style="'background-image:url(./img/products/'+list.pdImg+')'">
                        <div class="img_cover">
                            <h3>{{list.pdTit}}</h3>
                            <p>{{list.pdTxt}}</p>
                            <a href="">More</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    `
});


Vue.component("arrivals-el", {
    data : () => {
        return {pd_item : [
            {pdImg:"new_01_01.jpg", pdTit:"KING Platinum 21 FG/AG", pdTxt:"Men's Soccer Cleats"},
            {pdImg:"new_02_01.jpg", pdTit:"FUSE", pdTxt:"Training Shoes"},
            {pdImg:"new_03_01.jpg", pdTit:"Suede RE.GEN", pdTxt:"Sneakers"},
            {pdImg:"new_04_01.jpg", pdTit:"Leadcat", pdTxt:"G Sandals"},
            {pdImg:"new_05_01.jpg", pdTit:"COOLADAPT", pdTxt:"Women’s Running Tank Top"},
            {pdImg:"new_06_01.jpg", pdTit:"Sonora Waist", pdTxt:"BAG 2.0"},
            {pdImg:"new_07_01.jpg", pdTit:"High Court Regal Mid", pdTxt:"Women's Sneakers"},
            {pdImg:"new_08_01.jpg", pdTit:"Cali Star Rainbow", pdTxt:"Women's Sneakers"},
            {pdImg:"new_09_01.jpg", pdTit:"RS-Z Red", pdTxt:"CAMPUS"},
            {pdImg:"new_10_01.jpg", pdTit:"MB.01", pdTxt:"BUZZ CITY"},
        ]}
    },
    template : `
    <section id="newArrivals">
        <div class="wrap">
            <h2>New Arrivals</h2>

            <div class="content">
                <div class="box">
                    <div class="bxbg">
                        <div class="intro">
                            <h3>Products Launch</h3>
                            <p>Stay in the know with the latest drops and upcoming launches, plus early access to PUMA exclusives. Catch it here first.</p>
                        </div>
                    </div>
                </div>

                <div v-for="list in pd_item" class="box">
                    <div class="bxbg" v-bind:style="'background-image:url(./img/products/'+list.pdImg+')'">
                        <div class="img_cover">
                            <h3>{{list.pdTit}}</h3>
                            <p>{{list.pdTxt}}</p>
                            <a href="">More</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    `
});


Vue.component("category-el", {
    data : () => {
        return {ca_item : [
            {caImg:"category_01.jpg", caTit:"EVERYDAY", caTxt:"BEST FOR: A RUN HERE AND THERE."},
            {caImg:"category_02.jpg", caTit:"COMPETITIVE", caTxt:"BEST FOR: CHASING THE NEXT RACE."},
            {caImg:"category_03.jpg", caTit:"LONG DISTANCE", caTxt:"BEST FOR: RACKING UP THE MILES."},
        ]}
    },
    template : `
    <section class="story">
        <div class="wrap">
            <h2>MATCH YOUR ENERGY</h2>
            <p>EXPLORE RUNNING CATEGORIES</p>
            <div class="content">
                <div v-for="list in ca_item" class="box">
                    <div class="img_part">
                        <img v-bind:src="'./img/'+list.caImg" alt="">
                    </div>
                    <div class="txt_part">
                        <h3>{{list.caTit}}</h3>
                        <p>{{list.caTxt}}</p>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    `
});


Vue.component("category-el", {
    data : () => {
        return {ca_item : [
            {caImg:"category_01.jpg", caTit:"EVERYDAY", caTxt:"BEST FOR: A RUN HERE AND THERE."},
            {caImg:"category_02.jpg", caTit:"COMPETITIVE", caTxt:"BEST FOR: CHASING THE NEXT RACE."},
            {caImg:"category_03.jpg", caTit:"LONG DISTANCE", caTxt:"BEST FOR: RACKING UP THE MILES."},
        ]}
    },
    template : `
    <section class="story">
        <div class="wrap">
            <h2>MATCH YOUR ENERGY</h2>
            <p>EXPLORE RUNNING CATEGORIES</p>
            <div class="content">
                <div v-for="list in ca_item" class="box">
                    <div class="img_part">
                        <img v-bind:src="'./img/'+list.caImg" alt="">
                    </div>
                    <div class="txt_part">
                        <h3>{{list.caTit}}</h3>
                        <p>{{list.caTxt}}</p>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    `
});



Vue.component("midbanner-el", {
    template : `
    <section id="mid_banner">
        <div class="wrap">
            <div class="img_part"></div>
            <div class="txt_part">
                <h3>RUN PUMA</h3>
                <p>PUMA’s history is packed with nearly 75 years of world records, firsts, and onlys from Abebe Bikila to Bill Rodgers to Sabrina Mockenhaupt to Usain Bolt. In industry years, this makes us faster since forever, and we believe now is the time for us to pick up speed again and spark change from the most sought-after marathon finish lines to local run communities.</p>
                <button v-on:click="openPop">More Video</button>
            </div>
        </div>    
    </section>
    `,
    methods: {
        openPop(){
            console.log("팝업창을 엽니다.");
            document.querySelector(".pop_dark").classList.add("active");
            document.querySelector(".popup").classList.add("active");
        }
    },
});


Vue.component("collecttion-el", {
    data : () => {
        return {co_item : [
            {coImg:"collection_01.jpg", coTit:"SOFT ON ANOTHER LEVEL", coTxt:"CLOUDSPUN"},
            {coImg:"collection_02.jpg", coTit:"ESCAPE FROM ROUTINE", coTxt:"PUMA x HELLY HANSEN"},
            {coImg:"collection_03.jpg", coTit:"EMPOWERED PEOPLE. CLEANER PLANET.", coTxt:"PUMA x FIRST MILE"},
        ]}
    },

    template : `
    <section class="story">
        <div class="wrap">
            <h2>MATCH YOUR ENERGY</h2>
            <p>EXPLORE RUNNING CATEGORIES</p>
            <div class="content">
                <div v-for="list in co_item" class="box">
                    <div class="img_part">
                        <img v-bind:src="'./img/'+list.coImg" alt="">
                    </div>
                    <div class="txt_part">
                        <h3>{{list.coTit}}</h3>
                        <p>{{list.coTxt}}</p>
                        <a href="">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    `
});


Vue.component("footer-el", {
    data : () => {
        return {
        support_item : [
            "Customer Service",
            "Contact Us",
            "Shipping and Delivery",
            "Store Locator",
            "Return Policy",
            "Purchase a Digital Gift Card",
            "FAQs",
            "Terms & Conditions",
            "Privacy Policy",
            "Service Discount",
        ],
        about_item : [
            "Company",
            "Corporate News",
            "Press Center",
            "#REFORM",
            "Investors",
            "Sustainability",
            "Careers",
        ]}
    },

    template : `
    <footer>
        <div class="dark">
            <div class="wrap">
                <div class="top">
                    <div class="box">
                        <h3>Supports</h3>
                        <div class="lists">
                            <ul>
                                <li v-for="list in support_item"><a href="">{{list}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="box">
                        <h3>About PUMA</h3>
                        <div class="lists">
                            <ul>
                                <li v-for="list in about_item"><a href="">{{list}}</a></li>                      
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <p>© PUMA SE, 2022. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    `
});

/*
Vue.component("popup-el", {
    template : `
    <div class="pop_dark" v-on:click="closePop"></div>
    <div class="popup">
        <span class="close" v-on:click="closePop">×</span>
        <div class="cover">
            <iframe class="movie_space" src="https://www.youtube.com/embed/I7UDv5SkFZw?rel=0&amp;autoplay=1&amp;loop=1&amp;playlist=I7UDv5SkFZw&amp;mute=1&amp;controls=0&amp;modestbranding=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    `,
    methods: {
        closePop(){
            console.log("팝업창을 닫습니다.");
            document.querySelector(".pop_dark").classList.remove("active");
            document.querySelector(".popup").classList.remove("active");
        }
    },
});
*/

new Vue({
    el : "#app",

    methods: {
        closePop(){
            console.log("팝업창을 닫습니다.");
            document.querySelector(".pop_dark").classList.remove("active");
            document.querySelector(".popup").classList.remove("active");
        }
    },
});

/*
document.querySelector(".pop_dark").addEventListener("click", function(){
    document.querySelector(".pop_dark").classList.remove("active");
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".pop_dark").classList.remove("active");
    document.querySelector(".popup").classList.remove("active");
});
*/