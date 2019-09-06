<template>
  <div class="home">
    <div class="nav">
      <h1>Marcus<br/>Andersson</h1>
      <router-link to="/about">
        <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
      </router-link>
      
    </div>
    <div class="content">
      <p>en kreativ webbutvecklare<br/>i växjö med fokus på att göra onlineupplevelser minnesvärda.</p>
      <span>
        <i class="fas fa-long-arrow-alt-right"></i>
        <router-link to="/om-mig">
        <h3>Läs mer om mig</h3>
      </router-link>
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/test.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position-y: -150px; */
}
h1 {
  /* margin-left: 60px; */
  font-size: 50px;
  font-family: 'HWTArtz';
  font-weight: normal;
	font-style: normal;
  color: black;
  text-align: left;
  line-height: 42px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin-top: 25vh;
  height: 100vh;
}
.content span {
  display: flex;
  flex-direction: row;  
  justify-content: center;
}
.content span i {
  padding-right: 6px;
  padding-top: 9px; 
  font-size: 18px;
}
.content p {
  text-align: left;
  color: #333333;
  font-family: "hwt artz", sans-serif;
  font-size: 3vw;
  line-height: 3.2vw;
  width: 50%;
  margin-bottom: 0px;
}
.content span a {
  /* float: left; */
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  text-transform: none;
  text-decoration: none;
  margin-top: 5px;
  color: #333333;
}
.nav {
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

@media screen and (max-width: 500px) {
  .home {
    background-position-y: 0px;
    background-position-x: -150px;
  }
  .nav {
    margin-top: 47px!important;
  }
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  /* .nav {
    width: 85%;
  } */
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    height: 100%;
  }
  .content p {
    width: 100%;
    font-size: 28px;
    line-height: 25px;
  }
  .content span i {
    padding-top: 2.5vw;
    padding-left: 2px;
  }
}

#menuToggle {
  display:block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #333333;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(-45deg) translate(-2px, -2.5px);
  background: #333333;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  transform: rotate(45deg) translate(0, 0px);
}
</style>