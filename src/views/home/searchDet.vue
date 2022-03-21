<template>
  <div style="position: relative;">
    <div>
      <div class="commonContent eo_none_content">
        <div class="logoNav2">
            <!-- 全文搜索 -->

            <div  class="searchBox">
                <div class="search">
                  <el-input placeholder="请输入关键词" v-model="searchText" class="input-with-select" >
                    <el-select v-model="golbalTab" slot="prepend" placeholder="请选择" style="width: 74px;" >
                       <el-option
                              v-for="(item,index) in options"
                              :key="index"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                      <!-- <el-option label="新闻" :value="1"></el-option>
                      <el-option label="展商" :value="2"></el-option>
                      <el-option label="展品" :value="3"></el-option>
                      <el-option label="嘉宾" :value="4"></el-option> -->
                    </el-select>
                    <el-button  slot="append" icon="el-icon-search" @click="getList(2)"></el-button>
                  </el-input>
                </div>
            </div>
        </div>
        <div class="left_Content" v-if="itemList.length != 0">
          <div class="sechbox">
            <ul v-if="sou == 1">
              <li v-for="(item, index) in itemList" :key="index" class="yuannei1" @click='goTo(item)'>
                <div class="fledli">
                <div class="sechleft" v-if="item.newsImgUrl">
                  <img :src="server+myimgHandle(item.newsImgUrl)" >
                </div>
                <div :class="item.newsImgUrl?'sechright':' '">
                  <div class="sertop">
                    <div class="serqian">{{item.createdTime}}</div>
                    <div class="sertit">{{item.title}}</div>
                  </div>
                  <!-- <div class="serbot2">
                    {{item.content}}
                  </div> -->
                  <div class="serbot2" v-html="item.content">
                  </div>
                </div>
                </div>
                <div class="hui"></div>
              </li>
            </ul>
            <ul v-if="sou == 2">
              <li v-for="(item, index) in itemList" :key="index" class="yuannei1" @click='goTo2(item.id)'>
                <div class="fledli">
                <div class="sechleft2" v-if="item.logoUrl">
                  <img v-if="item.type == 0" :src="server+myimgHandle(item.logoUrl)">
                  <img v-else :src="item.logoUrl" />
                </div>
                <div :class="item.logoUrl?'sechright2':' '">
                  <div class="sertop">
                    <div class="serqian">{{item.stadium}}</div>
                    <div class="sertit">{{item.name}}</div>
                  </div>
                  <div class="serbot2" v-html="item.intro">
                  </div>
                </div>
                </div>
                <div class="hui"></div>
              </li>
            </ul>
            <ul v-if="sou == 3">
              <li v-for="(item, index) in itemList" :key="index" class="yuannei" @click='goTo3(item.id)'>
                <div class="fledli">
                <div class="sechleft2" v-if="item.logoUrl">
                  <img :src="server+myimgHandle(item.logoUrl)" >
                </div>
                <div :class="item.logoUrl?'sechright2':' '">
                  <div class="sertop">
                    <div class="serqian">{{item.exhibitorName}}</div>
                    <div class="sertit">{{item.name}}</div>
                  </div>
                  <div class="serbot2" v-html="item.intro">
                  </div>
                </div>
                </div>
                <div class="hui"></div>
              </li>
            </ul>
            <ul v-if="sou == 4">
              <li v-for="(item, index) in itemList" :key="index" class="yuannei" @click='goTo4(item.id)'>
                <div class="fledli">
                <div class="sechleft2" v-if="item.headUrl">
                  <img :src="server+myimgHandle(item.headUrl)" >
                </div>
                <div :class="item.headUrl?'sechright2':' '">
                  <div class="sertop">
                    <div class="serqian">{{item.company}}</div>
                    <div class="sertit">{{item.name}}</div>
                  </div>
                  <div class="serbot2" v-html="item.intro">
                  </div>
                </div>
                </div>
                <div class="hui"></div>
              </li>
            </ul>
          </div>
        </div>
        <div style="padding: 50px 0; text-align: center">
          <el-pagination
            background
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            :total="totalPage"
            layout="total, sizes, prev, pager, next, jumper, slot"
          >
            <el-button
              style="margin-left: 20px; border: 1px solid #c0c4cc; color: #606266"
              size="mini"
              @click="getData"
              >{{ $t("listOfExhibitors.t4") }}</el-button>
          </el-pagination>
        </div>
      </div>
    </div>
      <img class="ditu" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" >
  </div>
</template>
<script>
import headerNav from '@/components/headerNav3'
export default {
  components:{headerNav},
  data() {
    return {
      golbalTab: 1,
      searchText: '',
      pageIndex: 1,
      pageSize: 5,
      totalPage: 0,
      itemList:[],
      server:'http://218.59.142.236',
      sou:1,
       options: [{
            value: '1',
            label: '新闻'
        }, {
            value: '2',
            label: '展商'
        }, {
            value: '3',
            label: '展品'
        },{
            value: '4',
            label: '嘉宾'
        }],
        newStr:0
    }
  },
  computed: {

  },
  watch: {},
  mounted() {
    console.log( this.$route.query)
    this.golbalTab = this.$route.query.lable
    // for(let i in this.label){
    //   if(this.$route.query.lable == i.value){
    //     this.golbalTab = i.lable
    //   }
    // }
    this.searchText = this.$route.query.value
    this.sou = this.$route.query.lable
    this.getList()
  },
  methods: {
    goTo(item){
      console.log(item.flag)
      console.log(item.id)
      console.log(item.refUrl)
      if(item.flag == 2){
        console.log(item.id)
        this.$router.push({
          path:'newsInfo',
          query:{
            id:item.id
            },
          });
      }else if(item.flag == 1){
        window.open(item.refUrl);
      }
    },
    goTo2(url){
      this.$router.push({
        path:'businessmanDet',
        query:{
          id:url
          },
        });
    },
    goTo3(url){
      this.$router.push({
        path:'exhibitDetil',
        query:{
          id:url
          },
        });
    },
    goTo4(url){
      this.$router.push({
        path:'inviteGuestDetail',
        query:{
          id:url
          },
        });
    },
    getData(){

    },
    getList(e){
      if(e == 2){
        this.pageIndex = 1
      }
      if(this.golbalTab == 1){
        console.log('新闻')
        this.$http({
          url: this.$http.adornUrl(
            `/news/list?page=${this.pageIndex}&pageSize=${this.pageSize}&keywords=${this.searchText}`
          ),
          method: "get",
        }).then(({ data }) => {
          if(data.data.status == 404){
            this.itemList = []
          }else{
            console.log(data)
            this.itemList = data.data.list
            this.totalPage = data.data.total
            this.sou = 1
          }
        });
      }else if(this.golbalTab == 2){
        let dli = []
        this.$http({
          url: this.$http.adornUrl(
            `/exhibitor/list?page=${this.pageIndex}&pageSize=${this.pageSize}&keywords=${this.searchText}`
          ),
          method: "get",
        }).then(({ data }) => {
          if(data.data.status == 404){
            this.itemList = []
          }else{
            console.log(data)
            this.totalPage = data.data.total
            this.sou = 2
            dli = data.data.list
            // dli = ['1','2','3','4','5']
            for(let i in dli){
              console.log('打印')
              console.log(dli[i].logoUrl.indexOf('http'))
              if(dli[i].logoUrl.indexOf('http') == -1){
                dli[i].type = 0
              }else if(dli[i].logoUrl.indexOf('http') == 0){
                dli[i].type = 1
              }
            }
            console.log('改变')
            console.log(dli)
            this.itemList = dli
          }
        });
      }else if(this.golbalTab == 3){
        this.$http({
          url: this.$http.adornUrl(
            `/exhibitor/product/list?page=${this.pageIndex}&pageSize=${this.pageSize}&keywords=${this.searchText}`
          ),
          method: "get",
        }).then(({ data }) => {
          if(data.data.status == 404){
            this.itemList = []
          }else{
            console.log(data)
            this.itemList = data.data.list
            this.totalPage = data.data.total
            this.sou = 3
          }
        });
      }else if(this.golbalTab == 4){
        this.$http({
          url: this.$http.adornUrl(
            `/guest/list?page=${this.pageIndex}&pageSize=${this.pageSize}&keywords=${this.searchText}`
          ),
          method: "get",
        }).then(({ data }) => {
          if(data.data.status == 404){
            this.itemList = []
          }else{
            console.log(data)
            this.itemList = data.data.list
            this.totalPage = data.data.total
            this.sou = 4
          }
        });
      }
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getList()();
    }, // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getList()();
    },
    myimgHandle(i) {
      if (i === null || i === '' || i === undefined) {
        return require('@/assets/images/exhibition/default.png');
      } else {
        var str = '';
        for (const j of i.split(',')) {
          if (j) {
            str = j;
            break;
          }
        }
        return str;
      }
    },
  }
};
</script>
<style scoped>
  .yuannei1,.yuannei{
    cursor: pointer;
  }
  .yuannei:last-child .hui,.yuannei1:last-child .hui{
    display: none;
  }
  .hui{
    width: 1332px;
    height: 1;
    border: 1px solid #EEEFF0;
    margin: 20px 0 20px 0;
  }
  .serbot{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636363;
    line-height: 32px;
    margin-top: 13px;
  }
  .serbot2{
    font-size: 15px!important;
    /* font-family: PingFangSC-Regular, PingFang SC; */
    font-weight: 400;
    color: #636363;
    line-height: 32px;
    margin-top: 13px;
     text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      font-family: "microsoft yahei"!important;
  }
  .sertop{
    display: flex;
    align-items: center;
  }
  .sertit{
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1C1C1C;
     white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
  }
  .serqian{
    /* width: 69px; */
    height: 25px;
    background: rgba(93, 154, 254, 0.17);
    border-radius: 3px;
    border: 1px solid #5D9AFE;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #5D9AFE;
    margin-right: 13px;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
     white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
  }
  .fledli{
    display: flex;
  }
  .sechright{
    width: 845px;
  }
  .sechright2{
    width: 1245px;
  }
  .sechleft{
    width: 400px;
    height: 228px;
    margin-right: 49px;
  }
  .sechleft img{
    max-width: 400px;
   height: 100%;
       margin: auto;
       display: block;
  }
  .sechleft2{
    width: 100px;
    height: 57px;
    margin-right: 10px;
  }
  .sechleft2 img{
    max-width: 100px;
   height: 100%;
       margin: auto;
       display: block;
  }
  .ditu{
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 0;
  }
  .mfsanyaun{
    border-left: 4px solid #5D9AFE;
    background: rgba(93, 154, 254, 0.5) !important;
    box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5) !important;
    font-size: 16px !important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500 !important;
    color: #FFFFFF !important;
    line-height: 22px !important;
  }
  .mfone{
    font-size: 28px!important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 40px;
  }
  .mftwo{
    border-radius: 22px;
    border: 1px solid #7DAEFE;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
    padding: 6px 15px;
  }
.rotation_img {
  width: 100%;
  height: 100%;
  min-width: 1290px;
  display: block;
}
.exhibitionOverviewName {
  height: 65px;
  line-height: 65px;
  font-size: 20px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: #2f0954;
}
hr {
  margin: 0;
}
.left_Content {
  width: 1370px;
  /* height: 713px; */
  background: #FFFFFF;
  box-shadow: 0px 3px 10px 1px rgba(187, 187, 187, 0.48);
  border-radius: 6px;
  margin-top: 150px;
  padding: 20px;
}
.logoNav2 {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  float: right;
  margin-top: 50px;
}
.exhibition_content {
  height: 100px;
  text-align: center;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 0;
  box-sizing: border-box;
  margin-bottom: 33px;
  background: linear-gradient(180deg, rgba(231, 243, 255, 1.0), rgba(225, 225, 255, 0));
  border-radius: 6px;
}
.exhibition_content span:nth-child(1) {
  font-size: 30px;
}
.exhibition_content span:nth-child(2) {
  font-size: 14px;
}
.exhibitionOverviewUl {
  cursor: pointer;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
}
.exhibitionOverviewUl li{
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5);
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #484848;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
}
.liRightImg {
  float: right;
  width: 16px;
  height: 19px;
  margin: 18px 15px 0 0;
}

</style>
