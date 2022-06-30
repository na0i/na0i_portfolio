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
});

export { userStore };
