<template>
  <div id="EditProfile" v-if="user">
    <div class="row">
      <div class="col-12">
        <div class="user-name">{{ user.name }}</div>
        <div class="photo-area">
          <img :src="user.photo" class="photo" />
        </div>
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label for="edit_user_name" class="label">名前</label>
      </div>
      <div class="col-9">
        <input type="text" name="name" v-model="user.name" id="edit_user_name" class="form-control" />
      </div>
    </div>

    <div class="row profile-row" v-if="!currentUser.birthday">
      <div class="col-3">
        <label for="edit_user_name" class="label">生年月日</label>
      </div>
      <div class="col-9">
        <input type="date" name="birthday" v-model="user.birthday" :max="maxDate" :min="minDate" id="edit_user_birthday" class="form-control" />
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label class="label">性別</label>
      </div>
      <div class="col-9">
        <div :class="genderSelectClassName(i)" v-for="(gender, i) of genders" :data-index="i" @click="selectGender">{{ gender }}</div>
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label for="edit_user_area" class="label">出身</label>
      </div>
      <div class="col-9">
        <select name="area" v-model="user.area" id="edit_user_area" class="form-control">
          <option value="">選択してください</option>
          <option v-for="area of areas">{{ area }}</option>
        </select>
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label for="edit_user_industry" class="label">業種</label>
      </div>
      <div class="col-9">
        <select name="industry" v-model="user.industry" id="edit_user_industry" class="form-control">
          <option value="">選択してください</option>
          <option v-for="industry of industries">{{ industry }}</option>
        </select>
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label for="edit_user_job" class="label">職種</label>
      </div>
      <div class="col-9">
        <select name="job" v-model="user.job" id="edit_user_job" class="form-control">
          <option value="">選択してください</option>
          <option v-for="job of jobs">{{ job }}</option>
        </select>
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-3">
        <label for="edit_user_university" class="label">出身校</label>
      </div>
      <div class="col-9">
        <input type="text" name="university" v-model="user.university" id="edit_user_university" class="form-control" placeholder="慶應義塾大学商学部" />
      </div>
    </div>

    <div class="row profile-row">
      <div class="col-12">
        <label for="edit_user_name" class="label">プロフィール</label>
        <div class="textarea-field">
          <textarea name="profile" v-model="user.profile" id="edit_user_profile" class="form-control" placeholder="自己紹介"></textarea>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="btn-area">
          <div class="submit-btn" @click="submit">更新</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
import { GENDER_PARAMS, AREA_PARAMS, INDUSTRY_PARAMS, JOB_PARAMS } from '../../constants';

export default {
  data() {
    return { user: null };
  },
  computed: {
    ...mapState(['currentUser']),
    genders: () => GENDER_PARAMS,
    areas: () => AREA_PARAMS,
    industries: () => INDUSTRY_PARAMS,
    jobs: () => JOB_PARAMS,
    maxDate: () => moment().format("YYYY-MM-DD"),
    minDate: () => moment().add(-80, "years").format("YYYY-MM-DD"),
  },
  methods: {
    ...mapActions(['updateUser']),
    selectGender(e) {
      this.user.gender = Number(e.target.dataset.index);
    },
    genderSelectClassName(i) {
      let className = "gender-select";
      if (i === this.user.gender) { className += " selected" }
      return className;
    },
    submit() {
      this.updateUser({ user: this.user });
    },
  },
  created() {
    this.user = JSON.parse(JSON.stringify(this.currentUser));
  },
}
</script>

<style scoped>
  .user-name {
    margin: 0px 0px 5px;
    padding: 10px 0px;
    font-size: 18px;
    text-align: center;
  }
  .photo-area {
    width: 200px;
    margin: 0px auto 10px;
  }
  .photo {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
  .profile-row {
    margin-top: 5px;
  }
  .label {
    margin: 0px -10px;
    background: #212121;
    color: #FFF;
    text-align: center;
    line-height: 38px;
    display: block;
  }
  .gender-select {
    width: 33%;
    float: left;
    background: #EEE;
    text-align: center;
    line-height: 38px;
    transition: background-color .3s 0s ease;
  }
  .gender-select.selected {
    background: #F50057;
    color: #FFF;
  }
  .textarea-field {
    margin: 5px -10px;
  }
  #edit_user_profile {
    height: 150px;
  }
  .btn-area {
    margin: 0px -10px;
  }
  .submit-btn {
    width: 100%;
    padding: 8px 0px;
    background: #F50057;
    color: #FFF;
    text-align: center;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
</style>
