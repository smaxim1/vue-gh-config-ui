<template>
<tr>
<td>{{SystemParameter.ID}}</td>
<td>
  <span>{{SystemParameter.Name}}</span>
  </td>
<td>
  <input type="text" v-model="SystemParameter.Value" v-if="IsEditMode"/>
  <span v-if="!IsEditMode">{{SystemParameter.Value}}</span>
</td>
<td>
  
  <textarea v-model="SystemParameter.Comment" v-if="IsEditMode" cols="50" rows="5"/>
  <span v-if="!IsEditMode">{{SystemParameter.Comment}}</span>
</td>
<td>{{SystemParameter.DateChanged}}</td>
<td>
  <button type="button" class="btn btn-primary" v-if="!IsEditMode" v-on:click="toggleEditMode">Edit</button>
  <button type="button" class="btn btn-success" v-if="IsEditMode" v-on:click="saveChanges">Save</button>
  </td>
  <!--
<td><button type="button" class="btn btn-danger">Delete</button></td>
-->
</tr>
</template>

<script>
export default {
  props: {
    sysParam: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentSysParam: this.sysParam,
      IsEditMode: false,
    };
  },
  computed: {
    SystemParameter: {
      get() { return this.currentSysParam; },
      set(value) {
        this.currentSysParam = value;
      },
    },
  },
  methods: {
    toggleEditMode: function() {
      this.IsEditMode = !this.IsEditMode;
    },
    saveChanges: function() {
      this.$http.post('http://localhost:1337/systemparameters/edit', this.SystemParameter).then((response) => {
        // succes callback
        this.SystemParameter = response.data;
        this.SystemParameter.DateChanged = new Date(response.data.DateChanged * 1000).toLocaleString();
        this.toggleEditMode();

        // toastr.success('New system parameer added succesfully!', 'Success');
       }, (response) => {
         // error callback
         console.log('Error:', response.data);
         // toastr.error('Addding new parameter failed', 'Failure');
       });
    },
  },
};
</script>

<style>

</style>

