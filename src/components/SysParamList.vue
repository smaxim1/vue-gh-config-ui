<template>
<div>

<div class="container">

  <div class="row">
    <button class="button button-primary" v-on:click="toggleFormVisibility">Add new system parameter</button>
</div>
<br/>
<br/>

<form v-if="isVisibleAddNewForm">
  
<div class="form-group row">
    <label for="paramName" class="col-lg-4">Parameter name</label>
    <div class="col-lg-8">
      <input type="text" v-model="newParam.Name" class="form-control" id="paramName" aria-describedby="paramName" placeholder="Enter new parameter name"/>
    </div>
</div>
<div class="form-group row">
    <label for="paramValue" class="col-lg-4">Parameter value</label>
    <div class="col-lg-8">
      <input type="text" v-model="newParam.Value" class="form-control" id="paramValue" aria-describedby="paramValue" placeholder="Enter new parameter value"/>
    </div>
</div>
<div class="form-group row">
    <label for="paramComment" class="col-lg-4 col-form-label">Comment</label>
    <div class="col-lg-8">
      <textarea v-model="newParam.Comment" class="form-control" cols="50" rows="3" id="paramComment" aria-describedby="paramComment" placeholder="Enter comment" />
    </div>
</div>
<button type="submit" class="btn btn-primary" v-on:click="submitNewParam">Submit</button>
</form>
</div>
<br/>
<br/>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-12">
        <table class="table table-striped">
        <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Value</th>
        <th>Comment</th>
        <th>Date of change</th>
        <th></th>
        <th></th>
        </tr>
        </thead>
        <tbody>
        <sys-param-item v-for="param in SysParamsItems" :key="param.id" :sysParam="param"/>
        </tbody>
        </table>
    </div>
  </div>
</div>
</div>
</template>

<script>
import SysParamItem from './SysParamItem';
// import toastr from '../../node_modules/toastr';


export default {
  components: {
    SysParamItem,
  },
  name: 'SysParam',
  data() {
    return {
      SysParamsItems: [{
          id: 1,
          name: 'Item A',
          value: 'A',
          comment: 'A comment',
          date: '2017-11-26',
        }, {
          id: 2,
          name: 'Item B',
          value: 'B',
          comment: 'B comment',
          date: '2017-11-24',
       }, {
          id: 3,
          name: 'Item C',
          value: 'C',
          comment: 'C comment',
          date: '2017-11-21',
       }],
     isVisibleAddNewForm: false,
     newParam: {},

    };
  },
  mounted: function() {
	this.getSysParams();
  },
  methods: {
    getSysParams: function () {
       this.$http.get('http://localhost:1337/systemparameters').then((response) => {
        this.SysParamsItems = response.data.map(x => ({
          ID: x.ID, 
          Name: x.Name, 
          Value: x.Value, 
          Comment: x.Comment, 
          DateChanged: new Date(x.DateChanged * 1000).toLocaleString(), 
          IsEditMode: false,
          }));
       });
    },
	  toggleFormVisibility: function () {
		  this.isVisibleAddNewForm = !this.isVisibleAddNewForm;
    },
    submitNewParam: function () {
      this.$http.post('http://localhost:1337/systemparameters/create', this.newParam).then((response) => {
        // succes callback
        
        this.SysParamsItems = response.data.map(x => ({
          ID: x.ID, 
          Name: x.Name, 
          Value: x.Value, 
          Comment: x.Comment, 
          DateChanged: new Date(x.DateChanged * 1000).toLocaleString(), 
          }));

        this.toggleFormVisibility();

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

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>