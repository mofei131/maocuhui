<template>
  <div class="content">
    <img src="../../assets/images/register/leftBg.png" class="leftBg" />
    <img src="../../assets/images/register/rightBg.png" class="rightBg" />
    <div class="backWrap" @click="back()">
      <span class="back" />
      {{ $t('back') }}
    </div>
    <!-- 弹窗 -->
    <div id="bg" v-show="bgShow">
      <div class="toastWrap">
        <img
          src="../../assets/images/register/guanbi.png"
          @click="bgShow = !bgShow"
        />
        <div class="contentTip">{{ $t('register.t1') }}</div>
        <!-- <div class="confirmButton" @click="bgShow = !bgShow">确认</div> -->
        <div class="confirmButton" @click="navtoIndex()">{{ $t('register.t2') }}</div>
      </div>
    </div>
    <div class="container">
      <div class="titleWrap">
        <i></i>
        <p>{{ title }}</p>
      </div>
      <div class="chooseWrap">
        <!-- <div :class="{ activeTab: tab == 1 }" @click="changeTab(1)">展商</div>
        <div :class="{ activeTab: tab == 2 }" @click="changeTab(2)">观众</div>
        <div :class="{ activeTab: tab == 3 }" @click="changeTab(3)">
          媒体记者
        </div> -->
      </div>
      <!-- 进度条 -->
      <div class="stepWrap" v-show="tab == 1 || (tab == 2 && audience == 2)">
        <div class="step">
          <img
            :src="step == 1 ? endImg : startImg"
            alt
            srcset
            :class="[step == 2 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 1 ? startImg : endImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
        </div>
        <div class="stepTitle">
          <span @click="step = 1" style="cursor: pointer">{{
            startTitle
          }}</span>
          <span @click="step = 2" style="cursor: pointer">{{ endTitle }}</span>
        </div>
      </div>
      <!-- 专业买家进度条 -->
      <div class="stepWrap stepWrap3" v-show="tab == 2 && audience == 3">
        <div class="step">
          <img
            :src="step == 1 ? endImg : startImg"
            alt
            srcset
            :class="[step == 2 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 2 ? endImg : startImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 3 ? endImg : startImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
        </div>
        <div class="stepTitle">
          <span @click="step = 1" style="cursor: pointer">{{ $t('register.t6') }}</span>
          <span @click="step = 2" style="cursor: pointer">{{ $t('register.t7') }}</span>
          <span @click="step = 3" style="cursor: pointer">{{ $t('register.t8') }}</span>
        </div>
      </div>
      <!-- 专业验证买家进度条 -->
      <!-- <div class="stepWrap stepWrap4" v-show="tab == 2">
        <div class="step">
          <img
            :src="step == 1 ? endImg : startImg"
            alt
            srcset
            :class="[step == 2 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 2 ? endImg : startImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 3 ? endImg : startImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
          <div class="line"></div>
          <img
            :src="step == 4 ? endImg : startImg"
            alt
            srcset
            :class="[step == 1 ? 'smallImg' : '']"
          />
        </div>
        <div class="stepTitle">
          <span @click="step = 1" style="cursor: pointer">手机注册</span>
          <span @click="step = 2" style="cursor: pointer">联系人信息</span>
          <span @click="step = 3" style="cursor: pointer">个人信息</span>
          <span @click="step = 4" style="cursor: pointer">交易信息</span>
        </div>
      </div> -->
      <!-- 选择观众类型 -->
      <!-- <div v-show="audience == 0 && tab == 2" class="audienceWrap">
        <div
          @click="
            audience = 1;
            title = '手机验证买家';
          "
        >
          手机验证买家
        </div>
        <div
          @click="
            audience = 2;
            startTitle = '手机注册';
            endTitle = '联系人信息';
            title = '实名验证买家';
          "
        >
          实名验证买家
        </div>
        <div @click="audience = 3">专业买家</div>
        <div @click="audience = 4">专业验证买家</div>
      </div> -->
      <!-- 表单 -->
      <!-- 展商 -->
      <el-form
        :label-position="'top'"
        :rules="exhibitorrules"
        ref="exhibitor"
        label-width="80px"
        :model="exhibitor"
        class="formWrap"
        v-if="tab == 1"
      >
        <!-- 展商注册第一步 -->
        <div v-if="step == 1">
          <el-form-item :label="$t('register.t9')" prop="businessLicenseUrl">
            <el-upload
              class="avatar-uploader"
              :action="$http.adornUrl('/file/upload')"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="exhibitor.businessLicenseUrl"
                :src="exhibitor.businessLicenseUrl"
                class="avatar"
              />
              <div v-else class="uplaodTip">
                <div>{{ $t('register.t9') }}</div>
                <img src="@/assets/images/register/uploadImg.png" />
              </div>
              <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
            </el-upload>
          </el-form-item>
          <el-form-item :label="$t('register.t11')" prop="name">
            <el-input
              v-model="exhibitor.name"
              :placeholder="`${$t('register.t12')}${$t('register.t11')}`"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('register.t13')" prop="nameEn">
            <el-input
              v-model="exhibitor.nameEn"
              :placeholder="`${$t('register.t12')}${$t('register.t13')}`"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('register.t14')" prop="type">
            <el-input
              v-model="exhibitor.type"
              :placeholder="`${$t('register.t12')}${$t('register.t14')}`"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('register.t15')" prop="registeredCapital">
            <el-input
              v-model="exhibitor.registeredCapital"
              :placeholder="`${$t('register.t12')}${$t('register.t15')}`"
            ></el-input>
          </el-form-item>
        </div>

        <!-- 展商注册第二步 -->
        <div v-if="step == 2">
          <el-form-item
            :label="$t('register.t16')"
            prop="businessCardUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="$http.adornUrl('/file/upload')"
              :show-file-list="false"
              :on-success="uploadbusinessCardUrl"
              :before-upload="beforeAvatarUpload"
              :on-error = "uploadError"
            >
              <img
                v-if="exhibitor.businessCardUrl"
                :src="exhibitor.businessCardUrl"
                class="avatar"
              />
              <div v-else class="uplaodTip">
                <div>{{ $t('register.t16') }}</div>
                <img src="../../assets/images/register/uploadImg.png" />
              </div>
              <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
            </el-upload>
          </el-form-item>
          <el-form-item
            :label="$t('register.t17')"
            prop="idCardUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="$http.adornUrl('/file/upload')"
              :show-file-list="false"
              :on-success="uploadidCardUrl"
              :before-upload="beforeAvatarUpload"
              style="display: inline-block"
            >
              <img
                v-if="exhibitor.idCardUrl"
                :src="exhibitor.idCardUrl"
                class="avatar"
              />
              <div v-else class="uplaodTip">
                <img src="../../assets/images/register/idCardUrl.png" />
              </div>
              <div style="position: relative; top: 23px; color: #003694">
                {{ $t('register.t18') }}
              </div>
              <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
            </el-upload>
            <el-upload
              class="avatar-uploader"
              :action="$http.adornUrl('/file/upload')"
              :show-file-list="false"
              :on-success="uploadidCardUrl2"
              :before-upload="beforeAvatarUpload"
              style="display: inline-block; margin-left: 100px"
            >
              <img
                v-if="exhibitor.idCard2Url"
                :src="exhibitor.idCard2Url"
                class="avatar"
              />
              <div v-else class="uplaodTip">
                <img src="../../assets/images/register/idCardUrl2.png" />
              </div>
              <div style="position: relative; top: 23px; color: #003694">
                {{ $t('register.t19') }}
              </div>
              <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
            </el-upload>
          </el-form-item>
          <el-form-item :label="$t('register.t20')" prop="contacts" >
            <el-input
              v-model="exhibitor.contacts"
              :placeholder="`${$t('register.t12')}${$t('register.t20')}`"
            ></el-input>
          </el-form-item>
          <el-form-item
            :label="$t('register.t21')"
            prop="telephone"
          >
            <el-input
              v-model="exhibitor.telephone"
              :placeholder="`${$t('register.t12')}${$t('register.t21')}`"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item prop="qrcode" label="图形验证码" v-show="step == 2">
          <el-input
            v-model="qrcode"
            class="inputLine"
            placeholder="请输入图形验证码"
          ></el-input>
          <div
            class="erCodeButton"
            @click="getCaptchaCode()"
            style="background: white"
          >
            <img
              :src="captchaCode"
              v-if="captchaCode"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              "
            />
          </div>
        </el-form-item>
        <el-form-item prop="code" label="验证码" v-show="step == 2">
          <el-input
            v-model="exhibitor.code"
            class="inputLine"
            placeholder="请输入短信验证码"
          ></el-input>

          <div class="erCodeButton" @click="getSmsCode(exhibitor)">
            {{ smscodeToast }}
          </div>
        </el-form-item> -->
          <el-form-item :label="$t('register.t22')" prop="address" >
            <el-input
              v-model="exhibitor.address"
              :placeholder="`${$t('register.t12')}${$t('register.t22')}`"
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('register.t23')" prop="email">
            <el-input
              v-model="exhibitor.email"
              :placeholder="`${$t('register.t12')}${$t('register.t23')}`"
            ></el-input>
          </el-form-item>
        </div>

        <el-form-item style="justify-content: center; display: flex">
          <el-button
            type="primary"
            class="submitButton"
            @click="nextStep()"
            v-show="step == 1"
          >
            {{ $t('register.t24') }}
          </el-button>
          <el-button
            type="primary"
            class="submitButton"
            @click="submit()"
            v-show="step == 2"
          >
            {{ $t('register.t25') }}
          </el-button>
        </el-form-item>
      </el-form>
      <!-- 媒体记者 -->
      <el-form
        :label-position="'top'"
        :rules="mediarules"
        ref="media"
        label-width="80px"
        :model="media"
        class="formWrap"
        v-show="tab == 3"
      >
        <el-form-item :label="$t('register.t26')" prop="mobile">
          <el-input
            v-model="media.mobile"
            :placeholder="`${$t('register.t12')}${$t('register.t26')}`"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="qrcode" label="图形验证码">
          <el-input
            v-model="qrcode"
            class="inputLine"
            placeholder="请输入图形验证码"
          ></el-input>
          <div
            class="erCodeButton"
            @click="getCaptchaCode()"
            style="background: white"
          >
            <img
              :src="captchaCode"
              v-if="captchaCode"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              "
            />
          </div>
        </el-form-item> -->
        <el-form-item prop="code" :label="$t('register.t27')">
          <el-input
            v-model="media.code"
            class="inputLine"
            :placeholder="$t('register.t28')"
          ></el-input>

          <div class="erCodeButton" @click="getSmsCode(media)">
            {{ smscodeToast }}
          </div>
        </el-form-item>
        <el-form-item :label="$t('register.t29')" prop="name">
          <el-input v-model="media.name" :placeholder="`${$t('register.t12')}${$t('register.t23')}`"></el-input>
        </el-form-item>
        <!-- <el-form-item label="电话" prop="telephone">
          <el-input
            v-model="media.telephone"
            placeholder="请输入电话"
          ></el-input>
        </el-form-item> -->
        <el-form-item :label="$t('register.t30')" prop="address">
          <el-input v-model="media.address" :placeholder="`${$t('register.t12')}${$t('register.t30')}`"></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t23')" prop="email">
          <el-input
            v-model="media.email"
            :placeholder="`${$t('register.t12')}${$t('register.t23')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t31')" prop="company">
          <el-input
            v-model="media.company"
            :placeholder="`${$t('register.t12')}${$t('register.t31')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t32')" prop="position">
          <el-input
            v-model="media.position"
            :placeholder="`${$t('register.t12')}${$t('register.t32')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t33')" prop="certificateUrl">
          <el-upload
            class="avatar-uploader"
            :action="$http.adornUrl('/file/upload')"
            :show-file-list="false"
            :on-success="uploadcertificateUrl"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="media.certificateUrl"
              :src="media.certificateUrl"
              class="avatar"
            />
            <div v-else class="uplaodTip">
              <div>{{ $t('register.t34') }}</div>
              <img src="../../assets/images/register/uploadImg.png" />
            </div>
              <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item style="justify-content: center; display: flex">
          <el-button type="primary" class="submitButton" @click="submit()"
            >{{ $t('register.t25') }}</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 手机验证买家 -->
      <el-form
        :label-position="'top'"
        :rules="audienceMobilerules"
        ref="audienceMobile"
        label-width="80px"
        :model="audienceMobile"
        class="formWrap"
        v-show="tab == 2 && step == 1"
      >
        <el-form-item :label="$t('register.t26')" prop="mobile">
          <el-input
            v-model="audienceMobile.mobile"
            :placeholder="`${$t('register.t12')}${$t('register.t26')}`"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code" :label="$t('register.t27')">
          <el-input
            v-model="audienceMobile.code"
            class="inputLine"
            :placeholder="`${$t('register.t12')}${$t('register.t28')}`"
          ></el-input>

          <div class="erCodeButton" @click="getSmsCode(audienceMobile)">
            {{ smscodeToast }}
          </div>
        </el-form-item>
      </el-form>
      <!-- 实名验证买家 -->
      <el-form
        :label-position="'top'"
        :rules="audienceNamerules"
        ref="audienceName"
        label-width="80px"
        :model="audienceName"
        class="formWrap"
        v-show="tab == 2 && step == 2"
      >
        <el-form-item :label="$t('register.t16')" prop="businessCardUrl">
          <el-upload
            class="avatar-uploader"
            :action="$http.adornUrl('/file/upload')"
            :show-file-list="false"
            :on-success="uploadaudienceNameCardUrl"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="audienceName.businessCardUrl"
              :src="audienceName.businessCardUrl"
              class="avatar"
            />
            <div v-else class="uplaodTip">
              <div>{{ $t('register.t16') }}</div>
              <img src="../../assets/images/register/uploadImg.png" />
            </div>
            <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('register.t17')" prop="idCardUrl">
          <el-upload
            class="avatar-uploader"
            :action="$http.adornUrl('/file/upload')"
            :show-file-list="false"
            :on-success="uploadaudienceNameidCardUrl"
            :before-upload="beforeAvatarUpload"
            style="display: inline-block"
          >
            <img
              v-if="audienceName.idCardUrl"
              :src="audienceName.idCardUrl"
              class="avatar"
            />
            <div v-else class="uplaodTip">
              <img src="../../assets/images/register/idCardUrl.png" />
            </div>
            <div style="position: relative; top: 23px; color: #003694">
              {{ $t('register.t18') }}
            </div>
            <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            :action="$http.adornUrl('/file/upload')"
            :show-file-list="false"
            :on-success="uploadaudienceNameidCardUrl2"
            :before-upload="beforeAvatarUpload"
            style="display: inline-block; margin-left: 100px"
          >
            <img
              v-if="audienceName.idCard2Url"
              :src="audienceName.idCard2Url"
              class="avatar"
            />
            <div v-else class="uplaodTip">
              <img src="../../assets/images/register/idCardUrl2.png" />
            </div>
            <div style="position: relative; top: 23px; color: #003694">
              {{ $t('register.t19') }}
            </div>
            <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('register.t29')" prop="name">
          <el-input
            v-model="audienceName.name"
            :placeholder="`${$t('register.t12')}${$t('register.t29')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t58')" prop="company">
          <el-input
            v-model="audienceName.company"
            :placeholder="`${$t('register.t12')}${$t('register.t58')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t59')" prop="position">
          <el-input
            v-model="audienceName.position"
            :placeholder="`${$t('register.t12')}${$t('register.t59')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t23')" prop="email">
          <el-input
            v-model="audienceName.email"
            :placeholder="`${$t('register.t12')}${$t('register.t23')}`"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 专业买家 -->
      <el-form
        :label-position="'top'"
        :rules="audienceMajorrules"
        ref="audienceMajor"
        label-width="80px"
        :model="audienceMajor"
        class="formWrap"
        v-show="tab == 2 && step == 3"
      >
        <!-- step==3 -->
        <el-form-item :label="$t('register.t35')" prop="trade">
          <el-input
            v-model="audienceMajor.trade"
            :placeholder="`${$t('register.t12')}${$t('register.t35')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t36')" prop="product">
          <el-input
            v-model="audienceMajor.product"
            :placeholder="`${$t('register.t12')}${$t('register.t36')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t37')" prop="objective">
          <el-input
            v-model="audienceMajor.objective"
            :placeholder="`${$t('register.t12')}${$t('register.t37')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t38')" prop="interestProduct">
          <el-input
            v-model="audienceMajor.interestProduct"
            :placeholder="`${$t('register.t12')}${$t('register.t38')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t39')" prop="interestCompany">
          <el-input
            v-model="audienceMajor.interestCompany"
            :placeholder="`${$t('register.t12')}${$t('register.t39')}`"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 专业验证买家 -->
      <el-form
        :label-position="'top'"
        :rules="audienceMajorrules"
        ref="audienceSpecialty"
        label-width="80px"
        :model="audienceSpecialty"
        class="formWrap"
        v-show="tab == 2 && step == 4"
      >
        <!-- step==4 -->
        <el-form-item :label="$t('register.t40')" prop="businessLicenseUrl">
          <el-upload
            class="avatar-uploader"
            :action="$http.adornUrl('/file/upload')"
            :show-file-list="false"
            :on-success="uploadaudienceSpecialtybusinessLicenseUrl"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="audienceSpecialty.businessLicenseUrl"
              :src="audienceSpecialty.businessLicenseUrl"
              class="avatar"
            />
            <div v-else class="uplaodTip">
              <div>{{ $t('register.t40') }}</div>
              <img src="../../assets/images/register/uploadImg.png" />
            </div>
            <div slot="tip" style="color:#F56C6C;">{{ $t('register.t10') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('register.t41')" prop="companyIntro">
          <el-input
            type="textarea"
            v-model="audienceSpecialty.companyIntro"
            :placeholder="`${$t('register.t12')}${$t('register.t41')}`"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('register.t42')" prop="creditCode">
          <el-input
            v-model="audienceSpecialty.creditCode"
            :placeholder="`${$t('register.t12')}${$t('register.t42')}`"
          ></el-input>
        </el-form-item>
      </el-form>
      <div style="widh: 100%; display: flex; justify-content: center">
        <el-button
          type="primary"
          class="submitButton"
          @click="finish()"
          v-show="tab == 2"
          >{{ $t('register.t43') }}</el-button
        >
        <!-- <el-button
          type="primary"
          class="submitButton"
          @click="nextStepRule()"
          v-show="(step == 1 || step == 2 || step == 3) && tab == 2"
        >
          下一步
        </el-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import endImg from "../../assets/images/register/end.png";
import startImg from "../../assets/images/register/start.png";
export default {
  data() {
    return {
      endImg: endImg,
      startImg: startImg,
      step: 1,
      tab: "1",
      title: "",
      bgShow: false,
      audienceParams: {},
      exhibitor: {
        name: "",
        nameEn: "",
        type: "",
        registeredCapital: "",
        businessLicenseUrl: "",
        contacts: "",
        telephone: "",
        // code: "",
        address: "",
        email: "",
        businessCardUrl: "",
        idCardUrl: "",
        idCard2Url: "",
      },
      media: {
        mobile: "",
        code: "",
        name: "",
        email: "",
        company: "",
        position: "",
        certificateUrl: ""
      },
      qrcode: "",
      captchaCode: "", //验证码地址
      captchaKey: "",
      smscodeId: "",
      smscodeToast: this.$t('register.t45'),
      audience: 0, //观众类型
      audienceMobile: {
        mobile: "",
        code: "",
      },
      audienceName: {
        name: "",
        email: "",
        company: "",
        position: "",
        businessCardUrl: "",
        idCardUrl: "",
        idCard2Url: "",
      },
      audienceMajor: {
        trade: "",
        product: "",
        objective: "",
        interestProduct: "",
        interestCompany: "",
      },
      audienceSpecialty: {
        creditCode: "",
        companyIntro: "",
        businessLicenseUrl: "",
      },
      inviter: null
    };
  },
  computed: {
    startTitle() {
      return this.$t('register.t44')
    },
    endTitle() {
      return this.$t('register.t7')
    },
    exhibitorrules() {
      return {
        name: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t11')}`, trigger: "blur" },
        ],
        type: [{ required: true, message: `${this.$t('register.t12')}${this.$t('register.t14')}`, trigger: "blur" }],
        registeredCapital: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t15')}`, trigger: "blur" },
        ],
        businessLicenseUrl: [
          { required: true, message: this.$t('register.t9'), trigger: "blur" },
        ],
        contacts: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t20')}`, trigger: "blur" },
        ],
        telephone: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t21')}`,
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: this.$t('register.t60'),
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t22')}`, trigger: "blur" },
        ],
        email: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t23')}`, trigger: "blur" },
          {
            pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            message: this.$t('register.t61'),
            trigger: "blur",
          },
        ],
        businessCardUrl: [
          { required: true, message: this.$t('register.t62'), trigger: "blur" },
        ],
        idCardUrl: [
          {
            required: true,
            message: this.$t('register.t63'),
            trigger: "blur",
          },
        ],
        idCard2Url: [
          {
            required: true,
            message: this.$t('register.t64'),
            trigger: "blur",
          },
        ],
      }
    },
    mediarules() {
      return {
        mobile: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t21')}`,
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: this.$t('register.t60'),
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t27')}`,
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t29')}`,
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t23')}`, trigger: "blur" },
          {
            pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            message: this.$t('register.t61'),
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t30')}`,
            trigger: "blur",
          },
        ],
        company: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t31')}`,
            trigger: "blur",
          },
        ],
        position: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t32')}`,
            trigger: "blur",
          },
        ],
        certificateUrl: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t34')}`,
            trigger: "blur",
          },
        ],
      }
    },
    audienceMobilerules() {
      return {
        mobile: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t21')}`,
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: this.$t('register.t60'),
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t27')}`,
            trigger: "blur",
          },
        ],
      }
    },
    audienceNamerules() {
      return {
        name: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t29')}`,
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t23')}`, trigger: "blur" },
          {
            pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            message: this.$t('register.t61'),
            trigger: "blur",
          },
        ],

        company: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t31')}`,
            trigger: "blur",
          },
        ],
        position: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t32')}`,
            trigger: "blur",
          },
        ],
        businessCardUrl: [
          { required: true, message: this.$t('register.t62'), trigger: "blur" },
        ],
        idCardUrl: [
          {
            required: true,
            message: this.$t('register.t63'),
            trigger: "blur",
          },
        ],
        idCard2Url: [
          {
            required: true,
            message: this.$t('register.t64'),
            trigger: "blur",
          },
        ],
      }
    },
    audienceMajorrules() {
      return {
        mobile: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t21')}`,
            trigger: "blur",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: this.$t('register.t60'),
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t27')}`,
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t29')}`,
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: `${this.$t('register.t12')}${this.$t('register.t23')}`, trigger: "blur" },
          {
            pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            message: this.$t('register.t61'),
            trigger: "blur",
          },
        ],

        company: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t31')}`,
            trigger: "blur",
          },
        ],
        position: [
          {
            required: true,
            message: `${this.$t('register.t12')}${this.$t('register.t32')}`,
            trigger: "blur",
          },
        ],
        businessCardUrl: [
          { required: true, message: this.$t('register.t62'), trigger: "blur" },
        ],
        idCardUrl: [
          {
            required: true,
            message: this.$t('register.t63'),
            trigger: "blur",
          },
        ],
        idCard2Url: [
          {
            required: true,
            message: this.$t('register.t64'),
            trigger: "blur",
          },
        ],
      }
    }
  },
  methods: {
    uploadError(val){
      console.log(val,2)
    },
    back() {
      this.$router.go(-1);
    },
    clearValidate(formName) {
      this.$refs[formName].clearValidate();
    },
    changeTab(index) {
      this.tab = index;
      this.step = 1;

      if (this.$refs["exhibitor"]) {
        this.clearValidate("exhibitor");
      }
      if (this.$refs["media"]) {
        this.clearValidate("media");
      }
      if (this.$refs["audienceMobile"]) {
        this.clearValidate("audienceMobile");
      }
      if (this.$refs["audienceName"]) {
        this.clearValidate("audienceName");
      }
      if (this.$refs["audienceMajor"]) {
        this.clearValidate("audienceMajor");
      }
      if (this.$refs["audienceSpecialty"]) {
        this.clearValidate("audienceSpecialty");
      }
      if (index == 1) {
        this.title = this.$t('register.t3');
      } else if (index == 2) {
        this.title = this.$t('register.t4');
      } else if (index == 3) {
        this.title = this.$t('register.t5');
      }
      this.qrcode = "";
      this.captchaKey = "";
      this.smscodeId = "";
      this.audience = 0;
      // this.getCaptchaCode();
    },
    handleAvatarSuccess(res, file) {
      if (res.code == 1) {
        let url = this.$http.adornUrl("/ocr/businessLicense");
        this.exhibitor.businessLicenseUrl = res.data;
        if(res.data){
          this.$refs.exhibitor.clearValidate('businessLicenseUrl')
        }
        this.$http
          .post(`${url}`, {
            imgUrl: res.data,
          })
          .then((res) => {
            let data = res.data.data;
            this.exhibitor.name = data.company;
            this.exhibitor.type = data.type;
            this.exhibitor.registeredCapital = data.registeredCapital;
          });
      }
    },
    // 上传联系人名片
    uploadbusinessCardUrl(res, file) {
      if (res.code == 1) {
        console.log(res.data,6524)
        this.exhibitor.businessCardUrl = res.data;
        if(res.data){
          this.$refs.exhibitor.clearValidate('businessCardUrl')
        }
        let url = this.$http.adornUrl("/ocr/businessCard");
        this.$http
          .post(`${url}`, {
            imgUrl: res.data,
          })
          .then((res) => {
            let data = res.data.data;
            this.exhibitor.contacts = data.name.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.exhibitor.telephone = data.mobile.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.exhibitor.address = data.address.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.exhibitor.email = data.email.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
          });
      }
    },
    // 上传身份证正
    uploadidCardUrl(res, file) {
      if (res.code == 1) {
        this.exhibitor.idCardUrl = res.data;
        console.log(res.data,this.exhibitor.idCard2Url,55)
        if(res.data&&this.exhibitor.idCard2Url){
          this.refs.exhibitor.clearValidate('idCardUrl')
        }
        let url = this.$http.adornUrl("/ocr/idCardFront");
        this.$http
          .post(`${url}`, {
            imgUrl: res.data,
          })
          .then((res) => {
            let data = res.data.data;
            this.exhibitor.contacts = data.name;
          });
      }
    },
    // 上传身份证反
    uploadidCardUrl2(res, file) {
      if (res.code == 1) {
        this.exhibitor.idCard2Url = res.data;
        // console.log(res.data,this.exhibitor.idCard2Url,66)
        if(res.data&&this.exhibitor.idCardUrl){
        this.refs.exhibitor.clearValidate('idCardUrl')
        }
      }
    },
    uploadcertificateUrl(res, file) {
      if (res.code == 1) {
        this.media.certificateUrl = res.data;
      }
    },
    // 实名验证买家
    uploadaudienceNameCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceName.businessCardUrl = res.data;
        if(res.data){
          this.$refs.audienceName.clearValidate('businessCardUrl')
        }
        let url = this.$http.adornUrl("/ocr/businessCard");
        this.$http
          .post(`${url}`, {
            imgUrl: res.data,
          })
          .then((res) => {
            let data = res.data.data;
            this.audienceName.name = data.name.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.audienceName.position = data.position.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.audienceName.company = data.company.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
            this.audienceName.email = data.email.replace(
              /^(\s|\[)+|(\s|\])+$/g,
              ""
            );
          });
      }
    },
    uploadaudienceNameidCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceName.idCardUrl = res.data
        if(this.audienceName.idCardUrl&&this.audienceName.idCard2Url){
          this.$refs.audienceName.clearValidate('idCardUrl')
        }
        audienceName
        let url = this.$http.adornUrl("/ocr/idCardFront");
        this.$http
          .post(`${url}`, {
            imgUrl: res.data,
          })
          .then((res) => {
            let data = res.data.data;
            this.audienceName.name = data.name;
          });
      }
    },
    uploadaudienceNameidCardUrl2(res, file) {
      if (res.code == 1) {
        this.audienceName.idCard2Url = res.data
        if(this.audienceName.idCardUrl&&this.audienceName.idCard2Url){
        this.$refs.audienceName.clearValidate('idCardUrl')
        }
      }
    },
    // 专业买家
    uploadaudienceMajorCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceMajor.businessCardUrl = res.data;
      }
    },
    uploadaudienceMajoridCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceMajor.idCardUrl = res.data;
      }
    },
    uploadaudienceMajoridCardUrl2(res, file) {
      if (res.code == 1) {
        this.audienceMajor.idCard2Url = res.data;
      }
    },
    // 专业认证买家
    uploadaudienceSpecialtyCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceSpecialty.businessCardUrl = res.data;
      }
    },
    uploadaudienceSpecialtyidCardUrl(res, file) {
      if (res.code == 1) {
        this.audienceSpecialty.idCardUrl = res.data;
      }
    },
    uploadaudienceSpecialtyidCardUrl2(res, file) {
      if (res.code == 1) {
        this.audienceSpecialty.idCard2Url = res.data;
      }
    },
    uploadaudienceSpecialtybusinessLicenseUrl(res, file) {
      if (res.code == 1) {
        this.audienceSpecialty.businessLicenseUrl = res.data;
        let url = this.$http.adornUrl("/ocr/businessLicense");
        this.$http.post(`${url}`, {
            imgUrl: res.data,
          }).then((res) => {
            let data = res.data.data;
            this.audienceSpecialty.creditCode = data.creditCode;
          });
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png");
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error(this.$t('register.t46'));
      }
      if (!isLt2M) {
        this.$message.error(this.$t('register.t47'));
      }
      return isJPG && isLt2M;
    },
    nextStep() {
      this.$refs["exhibitor"].validate((valid) => {
        if (valid) {
          this.step += 1;
          document.body.scrollIntoView()
        }
      });
    },
    nextStepRule() {
      let formName = "";
      let url = "";
      if (this.step == 1) {
        formName = "audienceMobile";
        url = this.$http.adornUrl("/user/1/register");
      } else if (this.step == 2) {
        formName = "audienceName";
        url = this.$http.adornUrl("/user/2/register");
      } else if (this.step == 3) {
        formName = "audienceMajor";
        url = this.$http.adornUrl("/user/3/register");
      } else if (this.step == 4) {
        formName = "audienceSpecialty";
        url = this.$http.adornUrl("/user/4/register");
      }
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.step == 1) {
            Object.assign(this.audienceParams, this.audienceMobile);
          } else if (this.step == 2) {
            Object.assign(this.audienceParams, this.audienceName);
          } else if (this.step == 3) {
            Object.assign(this.audienceParams, this.audienceMajor);
          } else if (this.step == 4) {
            Object.assign(this.audienceParams, this.audienceSpecialty);
          }
          let pass = true
          if(this.tab == 2 && this.step == 2&&!this.audienceName.idCard2Url){
          this.$message.warning(this.$t('register.t64'))
          pass = false
          }
          if(!pass) return
          console.log(this.audienceParams);
          this.step += 1;
          if (this.$refs["audienceMobile"]) {
            this.$refs["audienceMobile"].clearValidate();
          }
          if (this.$refs["audienceName"]) {
            this.$refs["audienceName"].clearValidate();
          }
          if (this.$refs["audienceMajor"]) {
            this.$refs["audienceMajor"].clearValidate();
          }
          if (this.$refs["audienceSpecialty"]) {
            this.$refs["audienceSpecialty"].clearValidate();
          }
        }
      });
    },
    // 跳过
    finish() {
      let text = ``;
      let url = "";
      let formName = "";
      let params = {};
      if (this.step == 1) {
        text = this.$t('register.t48');
        formName = "audienceMobile";
        url = this.$http.adornUrl("/user/1/register");
        Object.assign(this.audienceParams, this.audienceMobile);
      } else if (this.step == 2) {
        text = this.$t('register.t49');
        formName = "audienceName";
        url = this.$http.adornUrl("/user/2/register");
        Object.assign(this.audienceParams, this.audienceName);
      } else if (this.step == 3) {
        text = this.$t('register.t50');
        formName = "audienceMajor";
        url = this.$http.adornUrl("/user/3/register");
        Object.assign(this.audienceParams, this.audienceMajor);
      } else if (this.step == 4) {
        text = this.$t('register.t51');
        formName = "audienceSpecialty";
        url = this.$http.adornUrl("/user/4/register");
        Object.assign(this.audienceParams, this.audienceSpecialty);
      }
      this.audienceParams.id = this.smscodeId || sessionStorage.getItem('smscodeId')
      this.$confirm(text, "", {
        confirmButtonText: this.$t('register.t52'),
        cancelButtonText: this.$t('register.t53'),
        type: "success",
      })
        .then(() => {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              if (!this.audienceParams.id) {
                this.$message.warning(this.$t('register.t54'))
                return false
              }

              if (this.inviter !== null) {
                this.audienceParams.inviteId = this.inviter
              }

              this.$http
                .post(`${url}`, this.audienceParams)
                .then(({ data: res }) => {
                  if (res.code == 1) {
                    this.$message({
                      message: res.msg,
                      type: "success",
                    });
                    if (this.step == 1) {
                      setTimeout(() => {
                        this.$router.push({
                          path: "/login",
                        });
                      }, 3000);
                    } else {
                      this.bgShow = true;
                    }
                  } else {
                    this.$message({
                      message: res.msg,
                      type: "warning",
                    });
                  }
                })
                .catch(() => {});
            } else {
              this.$message({
                message: this.$t('register.t55'),
                type: "error",
              });
              return false;
            }
          });
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除",
          // });
        });
    },
    // 获取图形验证码
    getCaptchaCode() {
      this.$http({
        url: this.$http.adornUrl(`/captcha`),
        method: "get",
      }).then(({ data }) => {
        this.captchaCode = data.data.imageData;
        this.captchaKey = data.data.key;
      });
    },
    // 获取手机验证码
    getSmsCode(form) {
      if (this.smscodeToast != this.$t('register.t45')) {
        this.$message({
          message: this.$t('register.t56'),
          type: "error",
        });
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(form.mobile)) {
        this.$message({
          message: this.$t('register.t57'),
          type: "error",
        });
        return false;
      }
      // if (!this.qrcode) {
      //   this.$message({
      //     message: "请输入图形验证码",
      //     type: "error",
      //   });
      //   return false;
      // }
      this.$http
        .post(this.$http.adornUrl(`/user/getSmsCode`), {
          // code: this.qrcode,
          // key: this.captchaKey,
          mobile: form.mobile,
          source: 1,
        })
        .then(({ data }) => {
          if (data.code == 1) {
            this.$message({
              message: data.msg,
              type: "success",
            });
            this.smscodeToast = 60;
            this.smscodeId = data.data;
            sessionStorage.setItem('smscodeId', data.data)
            var timer = setInterval(() => {
              if (this.smscodeToast > 0) {
                this.smscodeToast -= 1;
              } else {
                clearInterval(timer);
                this.smscodeToast = this.$t('register.t45');
              }
            }, 1000);
          } else {
            this.$message({
              message: data.msg,
              type: "error",
            });
            // this.getCaptchaCode();
          }
        })
        .catch(() => {});
    },
    submit() {
      let formName = "";
      let url = "";
      let params = {};
      if (this.tab == 1) {
        formName = "exhibitor";
        url = this.$http.adornUrl("/user/exhibitor/register");
        params = this.exhibitor;
      } else if (this.tab == 3) {
        formName = "media";
        url = this.$http.adornUrl("/user/media/register");
        params = this.media;
        params.id = this.smscodeId;
      } else if (this.tab == 2) {
        if (this.audience == 1) {
          formName = "audienceMobile";
          url = this.$http.adornUrl("/user/1/register");
          params = this.audienceSpecialty;
          params.id = this.smscodeId;
        } else if (this.audience == 2) {
          formName = "audienceName";
          url = this.$http.adornUrl("/user/2/register");
          params = this.audienceName;
          params.id = this.smscodeId;
        } else if (this.audience == 3) {
          formName = "audienceMajor";
          url = this.$http.adornUrl("/user/3/register");
          params = this.audienceMajor;
          params.id = this.smscodeId;
        } else if (this.audience == 4) {
          formName = "audienceSpecialty";
          url = this.$http.adornUrl("/user/4/register");
          params = this.audienceSpecialty;
          params.id = this.smscodeId;
        }
      }
      console.log(url, params);
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          this.$http
            .post(`${url}`, params)
            .then(({ data: res }) => {
              if (res.code == 1) {
                this.$message({
                  message: res.msg,
                  type: "success",
                });
                this.bgShow = true;
                // setTimeout(() => {
                //   this.$router.push({
                //     path: "/login",
                //   });
                // }, 3000);
              } else {
                this.$message({
                  message: res.msg,
                  type: "error",
                });
              }
            })
            .catch(() => {});
        } else {
          this.$message({
            message: this.$t('register.t55'),
            type: "error",
          });
          return false;
        }
      });
    },
    navtoIndex() {
      this.bgShow = !this.bgShow;
      this.$router.replace({ name: "main" });
    }
  },
  mounted() {
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab;
      if (this.tab == 1) {
        this.title = this.$t('register.t3');
      } else if (this.tab == 2) {
        this.title = this.$t('register.t4');
      } else if (this.tab == 3) {
        this.title = this.$t('register.t5');
      }
    }

    if (this.$route.query.id) {
      this.inviter = this.$route.query.id;
    }
    // this.getCaptchaCode();
  },
};
</script>
<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  .leftBg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 22%;
  }
  .rightBg {
    position: absolute;
    right: 0;
    top: 0;
    width: 7%;
  }
  .backWrap {
    position: absolute;
    left: calc(50% - 420px );
    top: 90px;
    font-size: 20px;
    z-index: 1;
    cursor: pointer;
  }
  #bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(127, 127, 127, 0.5);
    z-index: 999;
    .toastWrap {
      width: 665px;
      height: 186px;
      background: #ffffff;
      box-shadow: 0px 0px 23px 17px rgba(204, 204, 204, 0.4);
      border-radius: 15px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        position: absolute;
        right: 16px;
        top: 16px;
      }
      .contentTip {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #333333;
        margin: 0 auto;
        margin-top: 50px;
        text-align: center;
      }
      .confirmButton {
        width: 249px;
        height: 40px;
        background: #2884ec;
        border-radius: 20px;
        color: white;
        text-align: center;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 50px;
        cursor: pointer;
      }
    }
  }

  .container {
    width: 800px;
    margin: 0 auto;
    position: relative;
    // left: 10%;
    // top: 4%;
    // left: 50%;
    // transform: translateX(-50%);
    // height: 96%;
    height: calc(100% - 70px);
    // overflow-y: scroll;
    padding-top: 70px;
    overflow-x: hidden;
    .titleWrap {
      position: relative;
      height: 1.875rem;
      line-height: 1.875rem;
      margin: 2.47rem auto;
      text-align: center;
      width: 490px;

      i {
        display: block;
        height: 1px;
        background: #2884ec;
        position: absolute;
        top: 0.9rem;
        width: 100%;
      }
      p {
        display: inline-block;
        font-size: 34px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #343434;
        padding: 0 1.875rem;
        text-align: center;
        margin: 0 auto;
        position: relative;
        z-index: 2;
        background: white;

        text-align: center;
      }
    }
    .chooseWrap {
      display: flex;
      margin: 0 auto;
      margin-top: 37px;
      width: 530px;
      justify-content: space-between;
      div {
        width: 160px;
        height: 88px;
        background: #a2c0f9;
        border-radius: 5px;
        text-align: center;
        line-height: 88px;
        color: white;
        cursor: pointer;

        font-size: 26px;
      }
      .activeTab {
        background: #003694;
      }
    }

    .stepWrap {
      width: 340px;
      margin: 0 auto;
      margin-top: 52px;
      margin-bottom: 40px;
      .step {
        width: 280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        // img {
        //   width: 26px;
        //   height: 26px;
        // }
        .smallImg {
          // width: 16px;
          // height: 16px;
          width: 12px;
          height: 12px;
        }
        .line {
          width: 262px;
          height: 2px;
          background: #003694;
        }
      }
      .stepTitle {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #9a9a9a;
        display: flex;
        justify-content: space-between;
      }
    }
    .stepWrap3 {
      width: 500px;
      .step {
        width: 440px;
      }
    }
    .stepWrap4 {
      width: 680px;
      .step {
        width: 640px;
      }
    }
    .audienceWrap {
      margin-top: 70px;
      div {
        margin: 0 auto;
        width: 501px;
        height: 86px;
        background: #f5f5f5;
        border-radius: 14px;
        line-height: 86px;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 20px;
        cursor: pointer;
      }
      div:hover {
        background: #003694;
        color: white;
      }
    }
    .submitButton {
      width: 280px;
      height: 90px;
      background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
      border-radius: 45px;
      text-align: center;
      display: inline-block;
      cursor: pointer;
      font-size: 30px;
      font-weight: 400;
      color: #ffffff;
      margin: 50px auto;
    }
    .formWrap {
      >>> .el-input__inner {
        width: 100%;
        height: 70px;
        box-shadow: 1px 2px 18px 0px rgba(204, 204, 204, 0.2);
        border-radius: 14px;
      }
      >>> .el-form-item__label {
        font-size: 20px;
        font-weight: 400;
        color: #343434;
      }
      >>> .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 320px;
        height: 200px;
      }
      >>> .el-upload:hover {
        border-color: #409eff;
      }

      .uplaodTip {
        width: 80%;
        height: 70%;
        margin: 0 auto;
        position: relative;
        top: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 400;
        color: #003694;
        border: 1px dashed gray;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }
      }
      .erCodeButton {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 158px;
        height: 70px;
        line-height: 70px;
        background: linear-gradient(178deg, #b7d3fb 0%, #3372f2 100%);
        opacity: 0.8;
        color: white;
        border-radius: 0 14px 14px 0;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
      }
      .avatar {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
