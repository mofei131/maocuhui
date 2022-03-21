<template>
	<div>
		<div class="right_Content">
			<div class="info-box" v-if="!isEn">
				<!-- <div class="info-title"><span>现代农业对接交流会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
				<div class="titles">
					<div class="title-texts">中日现代农业对接交流洽谈会</div>
					<div class="title-time"><span style="color: #7daefe;">9月28日 9:00</span>&nbsp;&nbsp;&nbsp;富华大酒店北海厅
					</div>
				</div>
				<!-- <Infoview :list="list" /> -->
				<div style="position: relative;width: 820px;">
					<img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
					<img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
					<div v-for="(item,index) in list" :key="index">
						<div class="mffubiao"><span>{{item.title}}</span></div>
						<div class="mffenc">
							<div v-for="(item,index) in item.content" :key='index'>
								{{item}}
							</div>
						</div>
					</div>
					<div class="richeng">
						<!-- <div class="mffubiao"><span>会议议程</span></div> -->
						<p class="info1" style="margin-top: 20px;">（一）省农业农村厅有关负责同志致辞并推介山东农业；<img
								@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong101.mp4'"
								style="width: 25px;" src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（二）潍坊市委领导致辞；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong201.mp4'"
								src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（三）大阪总领馆领导在线致辞或与中国方面领导连线对话；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong301.mp4'"
								src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（四）潍坊国家农综区推介；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong401.mp4'"
								src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（五）农创集团推介重点项目；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong501.mp4'"
								src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（六）匠造集团推介重点项目；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong601.mp4'"
								src="../../assets/images/home/zb_bf.png" /></p>
						<p class="info1">（七）签约仪式；<img style="width: 25px;"
						@click="shipinUrl_show=true; shipinUrl = 'http://218.59.142.236/videosjava/nong701.mp4'"
						 src="../../assets/images/home/zb_bf.png" />
						</p>
					</div>
					<!-- <Infoview :list="list2" /> -->
					<div v-for="(item,index) in list2" :key="index+'1'">
						<div class="mffubiao"><span>{{item.title}}</span></div>
						<div class="mffenc">
							<div v-for="(item,index) in item.content">
								{{item}}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="info-box" v-if="isEn">
				<!-- <div class="info-title"><span>现代农业对接交流会</span></div>
        <div class="mflanf"></div>
        <div class="mfhuangti"></div> -->
				<div class="titles">
					<div class="title-texts">Modern Agriculture Networking Conference</div>
					<div class="title-time"><span style="color: #7daefe;">9:00 A.M. Sept. 28th
						</span>&nbsp;&nbsp;&nbsp;Beihai Hall of Fuwah International Convention Center</div>
				</div>
				<!-- <Infoview :list="list" /> -->
				<div style="position: relative;width: 820px;">
					<img class="content-img-1" src="../../assets/images/neiye_bg_1.png" />
					<img class="content-img-2" src="../../assets/images/neiye_bg_2.png" />
					<div v-for="(item,index) in list3" :key="index">
						<div class="mffubiao"><span>{{item.title}}</span></div>
						<div class="mffenc">
							<div v-for="(item,index) in item.content" :key='index'>
								{{item}}
							</div>
						</div>
					</div>
					<div class="richeng">
						<!-- <div class="mffubiao"><span>会议议程</span></div> -->
						<p class="info1" style="margin-top: 20px;">1.Speech and Shandong’s Agriculture Recommendation by
							an Official of Shandong Provincial Department of Agriculture and Rural Affairs </p>
						<p class="info1">2. Speech delivered by a leader of the CPC Weifang Municipal Committee </p>
						<p class="info1">3. Online speech or Online Dialogue with a Chinese Leader by a Leader of Osaka
							Consulate General</p>
						<p class="info1">4. Introduction of Weifang National Comprehensive Pilot Zone for Agriculture
							Opening Up and Development</p>
						<p class="info1">5. Key Projects Promotion by Nongchuang Group </p>
						<p class="info1">6. Key Projects Promotion by Jiangzao Group </p>
						<p class="info1">7. Signing Ceremony</p>
					</div>
					<!-- <Infoview :list="list2" /> -->
					<div v-for="(item,index) in list4 " :key="index+'1'">
						<div class="mffubiao"><span>{{item.title}}</span></div>
						<div class="mffenc">
							<div v-for="(item,index) in item.content">
								{{item}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹窗视频 -->
		<div v-if="shipinUrl_show" class="home_img_bofang-mark">
			<img style="position: absolute;top: 10px;right: 10px;z-index: 7500;" @click="shipinUrl_show = false"
				src="../../assets/images/exhibition/close.png" />
			<video width="800px" height="450px" style="margin-left: 7px;" controls="controls" :src="shipinUrl"></video>
		</div>
	</div>
</template>

<script>
	import Infoview from '@/views/conferenceLive/component/infoview'
	export default {
		name: "conferenceLive1",
		components: {
			Infoview
		},
		data() {
			return {
				isEn: false,
				list: [{
					title: '会议议程',
					content: [],
				}],
				list3: [{
					title: 'Agenda',
					content: [],
				}],
				list2: [{
						title: '主办单位',
						content: ['山东省农业农村厅', '省贸促会', '省商务厅', '潍坊市人民政府'],
					},
					{
						title: '承办单位',
						content: ['潍坊国家农业开放发展综合试验区推进办公室', '市贸促会', '市农业农村局', '市商务局'],

					},
					{
						title: '协办单位',
						content: ['山东省政府驻日本经济贸易代表处', '日本日中经贸中心', '潍坊日本总商会'],

					},
					{
						title: '参会人员',
						content: [
							'山东会场：省农业农村厅、省商务厅负责人；潍坊市领导；省农业农村厅相关处室负责人，潍坊国家农综区推进办、市商务局、市农业农村局、有关地市农业农村局负责人；中方企业代表、驻鲁日本企业（组织）代表；新闻媒体记者。',
							'日本会场：支持单位：省政府驻日本经贸代表处；组织单位：日中经贸中心、潍坊日本总商会；邀请部分相关日本政府、专家学者、机构、协会代表，10-15家农业及食品产业相关的驻日企业代表参会。'
						],
					},

				],
				list4: [{
						title: 'Hosts',
						content: ['Shandong Provincial Department of Agriculture and Rural Affairs',
							'China Council for the Promotion of International Trade (CCPIT) Shandong Sub-council',
							'Shandong Provincial Department of Commerce', 'Weifang Municipal People’s Government'
						],
					},
					{
						title: 'Organizers',
						content: [
							'Promotion Office of Weifang National Comprehensive Pilot Zone for Agricultural Opening Up and Development',
							'CCPIT Weifang Committee', 'Weifang Bureau of Agriculture and Rural Affairs',
							'Weifang Bureau of Commerce'
						],

					},
					{
						title: 'Co-Sponsors',
						content: [
							'Economic and Trade Representative Office of Shandong Provincial Government in Japan',
							'Japan-China Economic Relations and Trade Center in Japan',
							'Weifang General Chamber of Commerce in Japan'
						],

					},
					{
						title: 'Attendees',
						content: [
							'Shandong Venue: Heads of Shandong Provincial Department of Agriculture and Rural Affairs, and Shandong Provincial Department of Commerce; leaders of Weifang city; heads of relevant departments of Shandong Provincial Department of Agriculture and Rural Affairs, Promotion Office of Weifang National Agricultural Comprehensive Zone, Weifang Bureau of Commerce, Weifang Bureau of Agriculture and Rural Affairs, and related agriculture and rural affairs bureaus of other cities; representatives of Chinese companies and Japanese companies (organizations) based in Shandong; journalists and reporters of news media. ',
							'Japanese venue: supporters: Economic and Trade Representative Office of Shandong Provincial Government in Japan; organizers: Japan-China Economic Relations and Trade Centre, Weifang General Chamber of Commerce in Japan; some relevant Japanese government officials, experts and scholars, representatives of institutions and associations, and representatives of 10-15 companies of agricultural and food industry in Japan are invited to attend the Expo.'
						],
					},

				],

				shipinUrl: '',
				shipinUrl_show: false
			}
		},
		mounted() {
			if (localStorage.getItem("lang") == "en") {
				this.isEn = true;
			} else {
				this.isEn = false;
			}
			window.addEventListener("setItemEvent", (e) => {

				if (e.newValue == "en") {
					this.isEn = true;
				} else {
					this.isEn = false;
				}
			});
		}
	};
</script>

<style scoped>
	.title-time {
		position: absolute;
		right: 0;
		bottom: 7px;
		font-size: 16px;
		text-align: right;
		line-height: 24px;
	}

	.content-img-1 {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
	}

	.content-img-2 {
		position: absolute;
		right: -64px;
		z-index: 1;
		top: 450px;
	}

	.mftit {
		border-left: 4px solid #7daefe;
		font-size: 18px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 20px;
		height: 20px;
		margin-top: 22px;
		padding-left: 8px;
	}

	.titles {
		height: 100px;
		border-bottom: 2px solid #7daefe;
		width: 820px;
		display: flex;
		align-items: center;
		position: relative;
	}

	.title-texts {
		font-size: 19px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: bold;
		color: #333333;
		line-height: 26px;
		background-image: url('../../assets/images/neiye_k.png');
		width: 39px;
		height: 41px;
		background-size: 100% 100%;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		white-space: nowrap;
		padding-left: 25px;
	}

	.mffenc div {
		padding: 0px 5px 0px 5px;
		margin-right: 10px;
		cursor: pointer;
		color: #636363;
		/* line-height: 2; */
		/* margin-left: 30px; */
		line-height: 40px;
	}

	.mffenc {
		display: flex;
		flex-wrap: wrap;
		margin-right: 20px;
		/* margin-bottom: 30px; */
	}

	.mffubiao {
		border-left: 4px solid #7daefe;
		font-size: 18px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		/* line-height: 20px; */
		height: 20px;
		margin: 10px 0px;
		/* margin-top: 22px; */
		padding-left: 8px;
		font-weight: bold;
		color: #666666;
	}

	.mflanf {
		width: 75px;
		height: 6px;
		background: rgba(93, 154, 254, 0.8);
	}

	.mfhuangti {
		width: 821px;
		border-bottom: 1px solid #D3D3D3;
	}

	.richeng {
		padding-top: 0;
		color: #636363;
		position: relative;
		line-height: 40px;
	}

	.title {
		font-size: 20px;
		padding-left: 30px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #636363;
		/* line-height: 26px; */
		/* margin-bottom: 17px; */
	}

	.info1 {
		padding-left: 50px;
		font-size: 16px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #636363;
		/* line-height: 24px; */
		/* margin-bottom: 17px; */

		display: flex;
		align-items: center;
	}

	.info2 {
		padding-left: 70px;
		font-size: 16px;
		font-weight: 500;
		color: #636363;
		/* line-height: 24px; */
		/* margin-bottom: 17px; */
	}

	.info-box {
		margin-top: 90px;
		margin-left: 310px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 4px 4px 0px 0px;
		width: 895px;
		padding-left: 55px;
	}

	.info-container {
		margin-bottom: 20px;
	}

	.info-title {
		text-align: start;
		font-size: 19px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 26px;
		height: 55px;
		align-items: center;
		display: flex;
	}

	.info-line {
		width: 20px;
		height: 1px;
		margin: 0 10px;
		background: #444444;
	}

	.info-text {
		display: flex;
		padding: 10px 0 20px 0;
		flex-wrap: wrap;
		font-size: 28px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #222222;
	}

	.info-text>span {
		padding: 10px 0 10px 0;
		margin: 0 25px;
	}

	.home_img_bofang-mark {
		position: fixed;
		top: 50%;
		left: 50%;
		overflow: auto;
		margin: 0;
		z-index: 7000;
		transform: translate(-50%, -50%);
		background-image: url(../../assets/images/home/home_kuang.png);
		background-size: 100% 100%;
		width: 899px;
		height: 530px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
