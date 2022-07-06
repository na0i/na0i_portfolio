import { observable } from "mobx";

const userStore = observable({
  // state
  profile: {
    name: "나영",
    profileImg: null,
    topIntroduction: null,
    bottomIntroduction: null,
    githubLink: null,
    notionLink: null,
    blogLink: null,
    instagramLink: null,
  },

  basicInfo: {
    birthday: null,
    address: null,
    email: null,
    contact: null,
  },

  // action
  async getProfileInfo() {
    if (localStorage.getItem("profileInfo")) {
      this.profile = JSON.parse(localStorage.getItem("profileInfo"));
    }
    return this.profile;
  },

  setProfileInfo() {
    localStorage.setItem("profileInfo", JSON.stringify(this.profile));
  },

  async getBasicInfo() {
    if (localStorage.getItem("basicInfo")) {
      this.profile = JSON.parse(localStorage.getItem("basicInfo"));
    }
    return this.profile;
  },

  setBasicInfo() {
    localStorage.setItem("basicInfo", JSON.stringify(this.basicInfo));
  },

  onUpdateProfileImg(data) {
    let profileTemp = this.profile;
    profileTemp.profileImg = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateTopIntroduction(data) {
    let profileTemp = this.profile;
    profileTemp.topIntroduction = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateBottomIntroduction(data) {
    let profileTemp = this.profile;
    profileTemp.bottomIntroduction = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateGithubLink(data) {
    let profileTemp = this.profile;
    profileTemp.githubLink = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateNotionLink(data) {
    let profileTemp = this.profile;
    profileTemp.notionLink = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateBlogLink(data) {
    let profileTemp = this.profile;
    profileTemp.blogLink = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateInstagramLink(data) {
    let profileTemp = this.profile;
    profileTemp.instagramLink = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateProfileName(data) {
    let profileTemp = this.profile;
    profileTemp.name = data;
    this.profile = { ...profileTemp };
    this.setProfileInfo();
  },

  onUpdateBirthday(data) {
    let basicInfoTemp = this.basicInfo;
    basicInfoTemp.birthday = data;
    this.basicInfo = { ...basicInfoTemp };
    this.setBasicInfo();
  },

  onUpdateAddress(data) {
    let basicInfoTemp = this.basicInfo;
    basicInfoTemp.address = data;
    this.basicInfo = { ...basicInfoTemp };
    this.setBasicInfo();
  },

  onUpdateEmail(data) {
    let basicInfoTemp = this.basicInfo;
    basicInfoTemp.email = data;
    this.basicInfo = { ...basicInfoTemp };
    this.setBasicInfo();
  },

  onUpdateContact(data) {
    let basicInfoTemp = this.basicInfo;
    basicInfoTemp.contact = data;
    this.basicInfo = { ...basicInfoTemp };
    this.setBasicInfo();
  },
});

export { userStore };
