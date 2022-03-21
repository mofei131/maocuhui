<template>
  <div>
    <el-upload
      ref="imgsupload"
      class="imgsupload"
      :class="{noshow: urlsLength === limit}"
      list-type="picture-card"
      :action="action"
      :multiple="true"
      :name="'file'"
      :show-file-list="true"
      :file-list="imageUrl"
      :auto-upload="true"
      :limit="limit"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    >
    <img class="avatar-uploader-icon" src="@/assets/images/exhibition/upload.png" alt="">
      <!-- <i class="el-icon-plus avatar-uploader-icon" /> -->
    </el-upload>
    <el-dialog :visible.sync="showViewer" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'Imgdialog',
  props: {
    imgurl: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      imageUrl: [],
      urls: '',
      showViewer: false,
      dialogImageUrl: ''
    }
  },
  computed: {
    action() {
      return this.$http.adornUrl(`/file/upload`)
    },
    urlsLength() {
      if (this.urls) {
        var count = 0
        for (const i of this.urls.split(',')) {
          if (i) {
            count++
          }
        }
        return count
      } else {
        return 0
      }
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        this.urls = ''
        this.$refs.imgsupload.clearFiles()
      } else {
        this.urls = this.imgurl
        this.imgurlHandle(this.imgurl)
      }
    },
    urls(val) {
      this.$emit('update:imgurl', val)
    }
  },
  mounted() {
    this.urls = this.imgurl
    this.imgurlHandle(this.imgurl)
  },
  methods: {
    handleSuccess(res, file, fileList) {
      if (res.code!==1) {
        this.$message.warning(res.msg)
      } else {
        if (this.urls) {
          this.urls += ',' + res.data
        } else {
          this.urls = res.data
        }
      }
    },
    handleRemove(file, fileList) {
      var str = ''
      for (const [index, i] of new Map(fileList.map((i, index) => [index, i]))) {
        if (i.response) {
          str += i.response.data.list + (fileList.length === (index + 1) ? '' : ',')
        } else {
          str += i.name + (fileList.length === (index + 1) ? '' : ',')
        }
      }
      this.urls = str
    },
    beforeUpload(file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      if (!isJPG) {
        this.$message.error('图片只能是 JPG 或 png 格式!')
      }
      return isJPG
    },
    imgurlHandle(pics) {
      if (pics) {
        var list = pics.split(',')
        var urllist = []
        for (const i of list) {
          urllist.push({
            name: i,
            url: i
          })
        }
        this.imageUrl = urllist
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.showViewer = true
    },
    closeViewer() {
      this.showViewer = false
    }
  }
}
</script>

<style lang="scss" scoped>
.noshow{
  /deep/ .el-upload{
    display: none!important;
  }
}
.imgsupload{
  display: flex;
  align-items: flex-start;
  /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/ .el-upload{
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar-uploader-icon {
      width: 100px;
      height: 100px;
    }
  }
  /deep/ .el-upload-list__item-actions .el-upload-list__item-preview i {
    display: inline-block!important;
  }
  /deep/ .el-upload--picture-card{
    margin-right: 10px;
    order: -1;
  }
  /deep/ .el-upload-list{
    display: flex;
    align-items: flex-start;
    li{ 
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      >img{
        height:auto;
        width: auto;
        max-width: 100%;
        max-height: 100%;
        flex-shrink: 0;
      }
    }
  }
}

.imgsupload::after{
  content: '';
  clear: both;
}
</style>
