<template>
  <div class="cent">
    <!-- 背景图片 -->
    <img class="bg-img" src="http://hlstore.yimetal.cn/2021/yibohui/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211012161728.png" />
    <!-- 标题 -->
    <div class="title">
      <div>第七届中日韩产业博览会</div>
      <div>参展商满意度调查表</div>
    </div>
    <!-- 标语 -->
    <div class="slogan">
      <div class="slogan-title">尊敬的参展商：</div>
      <div class="slogan-cent">
        您好！感谢您对本届博览会的参与和支持！请您对本届博览会的组织、举办、服务和配套设施等进行综合评价，便于我们提高工作质量，更好的为广大展商服务。（请在对应序号上打勾）
      </div>
    </div>
    <!-- 问卷内容 -->
    <div>
      <!-- 1 -->
      <div class="oneData" v-for="(item, index) in oneData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent" v-for="(itm, idx) in item.cent">
          <div class="w-c-title">{{ itm.title }}</div>
          <div class="w-c-score">
            <div @click="oneClick(idx, '1')" :class="itm.score == 1 ? 'score_y' : 'score_n'">
              <span>{{ idx == 0 ? '1' : '' }}</span>
            </div>
            <div @click="oneClick(idx, '2')" :class="itm.score == 2 ? 'score_y' : 'score_n'">
              <span>{{ idx == 0 ? '2' : '' }}</span>
            </div>
            <div @click="oneClick(idx, '3')" :class="itm.score == 3 ? 'score_y' : 'score_n'">
              <span>{{ idx == 0 ? '3' : '' }}</span>
            </div>
            <div @click="oneClick(idx, '4')" :class="itm.score == 4 ? 'score_y' : 'score_n'">
              <span>{{ idx == 0 ? '4' : '' }}</span>
            </div>
            <div @click="oneClick(idx, '5')" :class="itm.score == 5 ? 'score_y' : 'score_n'">
              <span>{{ idx == 0 ? '5' : '' }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="oneData" v-for="(item, index) in twoData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="twoClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
              <input v-if="idx == 10" type="text" v-model="twoData[0].cent[10].other" />
            </div>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="oneData" v-for="(item, index) in threeData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="threeClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="oneData" v-for="(item, index) in fourData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="fourClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div class="oneData" v-for="(item, index) in fiveData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="fiveClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 6 -->
      <div class="oneData" v-for="(item, index) in sixData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" style="margin-right: 25px;" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="sixClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 7 -->
      <div class="oneData" v-for="(item, index) in sevenData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" style="margin-right: 25px;" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="sevenClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 8 -->
      <div class="oneData" v-for="(item, index) in eightData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" style="margin-right: 25px;" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="eightClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 9 -->
      <div class="oneData" v-for="(item, index) in nineData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" style="margin-right: 25px;" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="nineClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 10 -->
      <div class="oneData" v-for="(item, index) in tenData">
        <div class="w-title">{{ item.title }}</div>
        <div class="w-cent2">
          <div class="w-cent3" style="margin-right: 25px;" v-for="(itm, idx) in item.cent">
            <div class="w-c-score">
              <div @click="tenClick(idx)" :class="itm.select ? 'score_y' : 'score_n'" style="margin-right: 12px;"></div>
              {{ itm.title }}
            </div>
          </div>
        </div>
      </div>
      <!-- 11 -->
      <div class="oneData">
        <div class="w-title">11.您对本届中日韩产业博览会的建议与投诉？</div>
        <div class="w-cent2"><textarea v-model="Complaints_suggestions"></textarea></div>
      </div>
      <!-- 标语 -->
      <div class="slogan-cent2">感谢您的建议，您的帮助与扶持是我们进步的最大动力！</div>
      <!-- 提交信息 -->
      <div class="sb-info">
        <div class="sb-chid">
          参展商名称：
          <input type="text" v-model="czsName" />
        </div>
        <div class="sb-chid">
          展 位 号：
          <input type="text" v-model="zwh" />
        </div>
        <div class="sb-chid">
          联&nbsp;系&nbsp;人：
          <input type="text" v-model="lxr" />
        </div>
        <div class="sb-chid">
          联系方式：
          <input type="text" v-model="lxfs" />
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="sb-b"><span>提交</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oneData: [
        {
          title: '1.展会总体情况：（1.非常不满意；2.不太满意；3.一般般；4.比较满意；5.非常满意）',
          cent: [
            {
              title: '展会总体人流量',
              score: 0
            },
            {
              title: '展会整体氛围',
              score: 0
            },
            {
              title: '展会安保系统、秩序维护',
              score: 0
            },
            {
              title: '展会配套设施（停车场、洗手间等）',
              score: 0
            },
            {
              title: '展会宣传',
              score: 0
            },
            {
              title: '场内标识指引',
              score: 0
            },
            {
              title: '卫生环境',
              score: 0
            },
            {
              title: '展位搭建效果',
              score: 0
            },
            {
              title: '仓储物流服务效率',
              score: 0
            }
          ]
        }
      ],
      twoData: [
        {
          title: '2.您认为本届博览会让您最不满意的地方是什么？（多选题）',
          cent: [
            {
              title: '工作人员服务态度',
              select: false
            },
            {
              title: '缺乏交易机会',
              select: false
            },
            {
              title: '展会的标识指引',
              select: false
            },
            {
              title: '展会安保系统和秩序维护',
              select: false
            },
            {
              title: '展会配套设施（停车场、洗手间等） ',
              select: false
            },
            {
              title: '展会的宣传、造势',
              select: false
            },
            {
              title: '卫生、环境',
              select: false
            },
            {
              title: '展会氛围',
              select: false
            },
            {
              title: '参展商档次不高',
              select: false
            },
            {
              title: '无',
              select: false
            },
            {
              title: '其他',
              select: false,
              other: ''
            }
          ]
        }
      ],
      threeData: [
        {
          title: '3.您对本届博览会的成交额是否满意？（单选）',
          cent: [
            {
              title: '非常满意',
              select: false
            },
            {
              title: '比较满意',
              select: false
            },
            {
              title: '一般',
              select: false
            },
            {
              title: '不满意',
              select: false
            }
          ]
        }
      ],
      fourData: [
        {
          title: '4.本届博览会是否有专业采购商或者代理商与您合作？（单选）',
          cent: [
            {
              title: '有',
              select: false
            },
            {
              title: '没有',
              select: false
            }
          ]
        }
      ],
      fiveData: [
        {
          title: '5.您（或者您公司）还会参加明年的博览会吗？（单选）',
          cent: [
            {
              title: '会',
              select: false
            },
            {
              title: '不会',
              select: false
            },
            {
              title: '看情况',
              select: false
            }
          ]
        }
      ],
      sixData: [
        {
          title: '6.贵公司对于进入潍坊市场有何感想（单选）：',
          cent: [
            {
              title: '产品非常有市场',
              select: false
            },
            {
              title: '产品有市场',
              select: false
            },
            {
              title: '产品市场有限',
              select: false
            },
            {
              title: '产品没有市场',
              select: false
            }
          ]
        }
      ],
      sevenData: [
        {
          title: '7.总的来说，您对本届中日韩产业博览会的总体评价是？（单选）',
          cent: [
            {
              title: '非常满意',
              select: false
            },
            {
              title: '比较满意',
              select: false
            },
            {
              title: '一般',
              select: false
            },
            {
              title: '不满意',
              select: false
            }
          ]
        }
      ],
      eightData: [
        {
          title: '8.本届展会与您的预期相比？（单选）',
          cent: [
            {
              title: '比预期差很多',
              select: false
            },
            {
              title: '比预期差一些',
              select: false
            },
            {
              title: '基本达到预期',
              select: false
            },
            {
              title: '达到预期',
              select: false
            },
            {
              title: '超出预期',
              select: false
            }
          ]
        }
      ],
      nineData: [
        {
          title: '您的职位是? （单选）',
          cent: [
            {
              title: '普通员工',
              select: false
            },
            {
              title: '区域经理',
              select: false
            },
            {
              title: '企业高层/老板',
              select: false
            },
            {
              title: '其他',
              select: false
            }
          ]
        }
      ],
      tenData: [
        {
          title: '10.请问这是您第几次参加中日韩产业博览会？',
          cent: [
            {
              title: '第一次',
              select: false
            },
            {
              title: '第二次',
              select: false
            },
            {
              title: '第三到五次',
              select: false
            },
            {
              title: '五次以上',
              select: false
            }
          ]
        }
      ],
      Complaints_suggestions: '',
      czsName: '',
      zwh: '',
      lxr: '',
      lxfs: ''
    };
  },
  methods: {
    oneClick(index, number) {
      this.oneData[0].cent[index].score = number;
    },

    twoClick(index) {
      this.twoData[0].cent[index].select = !this.twoData[0].cent[index].select;
    },

    threeClick(index) {
      for (var i in this.threeData[0].cent) {
        if (i == index) {
          this.threeData[0].cent[i].select = true;
        } else {
          this.threeData[0].cent[i].select = false;
        }
      }
    },

    fourClick(index) {
      for (var i in this.fourData[0].cent) {
        if (i == index) {
          this.fourData[0].cent[i].select = true;
        } else {
          this.fourData[0].cent[i].select = false;
        }
      }
    },

    fiveClick(index) {
      for (var i in this.fiveData[0].cent) {
        if (i == index) {
          this.fiveData[0].cent[i].select = true;
        } else {
          this.fiveData[0].cent[i].select = false;
        }
      }
    },

    sixClick(index) {
      for (var i in this.sixData[0].cent) {
        if (i == index) {
          this.sixData[0].cent[i].select = true;
        } else {
          this.sixData[0].cent[i].select = false;
        }
      }
    },

    sevenClick(index) {
      for (var i in this.sevenData[0].cent) {
        if (i == index) {
          this.sevenData[0].cent[i].select = true;
        } else {
          this.sevenData[0].cent[i].select = false;
        }
      }
    },

    eightClick(index) {
      for (var i in this.eightData[0].cent) {
        if (i == index) {
          this.eightData[0].cent[i].select = true;
        } else {
          this.eightData[0].cent[i].select = false;
        }
      }
    },

    nineClick(index) {
      for (var i in this.nineData[0].cent) {
        if (i == index) {
          this.nineData[0].cent[i].select = true;
        } else {
          this.nineData[0].cent[i].select = false;
        }
      }
    },

    tenClick(index) {
      for (var i in this.tenData[0].cent) {
        if (i == index) {
          this.tenData[0].cent[i].select = true;
        } else {
          this.tenData[0].cent[i].select = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.cent {
  box-shadow: 0 0 10px 0 rgb(230 207 207 / 50%);
  padding: 10px 49px;
  margin: 40px auto;
  width: 900px;
  position: relative;
  background: #fff;
}
.bg-img {
  position: fixed;
  bottom: 0;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.title {
  text-align: center;
  padding: 36px 0;
  font-size: 32px;
  line-height: 56px;
  font-weight: bold;
}
.slogan {
  font-size: 20px;
  font-family: 宋体;
  margin-bottom: 30px;
}
.slogan-title {
  margin-bottom: 10px;
}
.slogan-cent {
  text-indent: 38px;
  line-height: 28px;
}
.slogan-cent2 {
  font-family: 宋体;
  text-indent: 38px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 60px;
}
.oneData {
  font-family: 宋体;
  margin-bottom: 30px;
}
.w-title {
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: bold;
}
.w-cent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 630px;
  height: 40px;
  font-size: 15px;
  margin-left: 14px;
}
.w-cent2 {
  display: flex;
  flex-flow: wrap;
  width: 630px;
}
.w-cent3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 15px;
  margin-left: 14px;
  margin-right: 65px;
}
.w-c-title {
}
.w-c-score {
  display: flex;
  align-items: center;
  position: relative;
}
.w-c-score span {
  position: absolute;
  top: -20px;
  text-indent: 1px;
}
.score_y {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  background-image: url(../../assets/images/home/dui.png);
  background-size: 100% 100%;
  margin-right: 40px;
}
.score_n {
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  margin-right: 40px;
}
input {
  border-width: 0px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  width: 250px;
  margin-left: 10px;
}
textarea {
  width: 100%;
  height: 160px;
  padding: 10px;
}
.sb-info {
  display: flex;
  align-items: center;
  flex-flow: wrap;
  font-family: 宋体;
  line-height: 43px;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 740px;
}
.sb-chid {
  display: flex;
  align-items: center;
}
.sb-b {
  text-align: center;
  margin-bottom: 30px;
}
.sb-b span {
  font-size: 17px;
  background-color: #409EFF;
  cursor: pointer;
  color: #fff;
  padding: 4px 33px;
  border-radius: 4px;
}
</style>
