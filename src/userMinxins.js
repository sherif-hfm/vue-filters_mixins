export const userMinxins={
    data:function(){
        return {          
          users:['sherif','ahmed','mohamed','mostafa','islam','omar'],
          filter:''
        }
      },
      computed:{
          filteredUser()
          {
            return this.users.filter((user)=>{return user.includes(this.filter);});
          }
      },
}