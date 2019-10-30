var contents = document.getElementsByClassName("contents");
var menu = new Vue({
    el: '#menu',
    data: {
        items: [{ id: 1, image: "image/home.png" }, { id: 2, image: "image/about.png" }, { id: 3, image: "image/main.png" }, { id: 4, image: "image/guide.png" }, { id: 5, image: "image/access.png" }]
    },
    methods: {
        changeContents: function (event) {
            var id = event.target.id;
            for (var i = 0; i < 5; i++) {
                if (i + 1 != id) {
                    contents[i].style.display = "none";
                } else {
                    contents[i].style.display = "block";
                }
            }
        }
    }
});
var introduce = new Vue({
    el: "#introduce",
    data:
    {
        list: [
            {
                name: "案内", comment: "案内部署長の内村凜香です。\n案内部署では主に正門看板のデザインや設置、階段アート、EZゾーンの装飾などをします。\n様々な装飾で高専祭を盛り上げられるようにみんなで頑張ります！楽しみに待っていてください♪"
            },
            { name: "演出", comment: "演出部署は高専祭２日目のライブ、ファッションショーの企画をメインで行っている部署です。今年は、今までと違った特殊効果を利用し、フェスのように盛り上がる演出をコンセプトにライブ、ファッションショーを企画しています！新しい試みもたくさんあるので、是非ご期待ください！" },
            { name: "会場", comment: "会場部署は、高専祭前日企画の運営、当日の交通整備が主な仕事です。前日は学内全体を盛り上げ、当日は部署員たちの気遣いと思いやりでピースフルな高専祭をお届けします。" },
            { name: "広報", comment: "広報部署は、高専祭のパンフレットとポスターを作ります。今年は、「冒険」というテーマでつくります。いいものができるよう、メンバーみんなでがんばっています！楽しみにしといてください。" },
            { name: "ステージ", comment: "第一体育館で面白いステージ企画で高専祭を盛り上げます！大爆笑間違いなしです！是非見に来てください！" },
            { name: "スポンサー", comment: "皆さんこんにちは、スポンサー部署です。夏休みからスポンサー活動を始め、様々な方に協力していただきました。ありがとうございました。" },
            { name: "美化", comment: "美化部署はゴミ箱の装飾・カウントダウン看板作成を行いました。当日はゴミの分別回収・献血の呼びかけをします。ゴミの分別にご協力をお願いします。" },
            { name: "物品", comment: "高専祭での物品の貸出と管理や、各クラス・部活動のバザーの運営を行っています。今年も楽しい高専祭になるように、部署員全員で協力してがんばります！" },
            { name: "メイン", comment: "今年のメイン企画のテーマは、千一夜物語(アラビアンナイト)を基にメイン部署が考えたオリジナルストーリーと「千二夜物語(アラビヱンナイト)」です！ＶＲやスタンプラリーを通じて、このオリジナルストーリーを体験して楽しんでいただくため、毎日準備しています！高専祭当日は是非、談話室隣のイングリッシュゾーンまでお越しください！！" },
            { name: "ロボコン", comment: "ロボコン部署は夏休み期間中に小中学生を対象にした製作教室と高専祭当日に開催される周南ロボコンの企画、運営を行っています。製作教室には毎年多くの小中学生が参加し、その後オリジナルの改造したロボットで周南ロボコンの競技に参加します。周南ロボコンは誰でも参加可能ですので、是非、参加してみてください。" }]
    },
});

var map_cover = document.getElementById("guide_cover");
var map_parts = document.getElementsByClassName("map");
Array.prototype.forEach.call(map_parts, function (element) {
    element.addEventListener("click", function (event) {
        var image = event.target.getAttribute("src");
        var img = document.createElement("img");
        img.setAttribute("src", image);
        map_cover.innerHTML = "";
        map_cover.appendChild(img);
        map_cover.style.display = "block";
    })
});
var access=document.querySelectorAll(".time_to_d img");
Array.prototype.forEach.call(access,function(element){
    element.addEventListener("click", function (event) {
        var image = event.target.getAttribute("src");
        var img = document.createElement("img");
        img.setAttribute("src", image);
        map_cover.innerHTML = "";
        map_cover.appendChild(img);
        map_cover.style.display = "block";
    })
})
map_cover.addEventListener("click", function () {
    this.style.display = "none";
});
var index=0;
var departs=document.getElementById("introduce");
var buttons=document.getElementsByClassName("button");
Array.prototype.forEach.call(buttons,function(button,id){
    button.addEventListener("click",function(){
        if(id==0){
            if(index==0){
            index=9;
            }else{
                index--;
            }
        }else{
            if(index==9)
            index=0;
            else{
                index++;
            }
        }
        departs.style.transform="translateX(-"+index+"0%)";

    });
})

