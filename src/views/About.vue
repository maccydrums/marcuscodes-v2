<template>
  <div class="about">
    <div class="nav">
      <router-link to="/">
        <h1>
          Marcus
          <br />Andersson
        </h1>
      </router-link>
      <a @click="$router.go(-1)">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
    <div class="content">
      <div class="left-aside">
        <ul>
          <router-link to="/">
            <li>Hem</li>
          </router-link>
          <router-link to="/om-mig">
            <li>Om mig</li>
          </router-link>
          <router-link to="/utveckling">
            <li>Utveckling</li>
          </router-link>
          <router-link to="/portfolio">
            <li>Portfolio</li>
          </router-link>
          <router-link to="/kontakt">
            <li>Kontakt</li>
          </router-link>
        </ul>
      </div>
      <div class="right-aside">
        <a href="mailto:hej@marcuscodes.se"> hej@marcuscodes.se</a>
        <p>076 118 48 57</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #19232d;
  color: white;
}
h1 {
  font-size: 50px;
  font-family: 'HWTArtz';
  font-weight: normal;
	font-style: normal;
  color: white;
  text-align: left;
  line-height: 42px;
}
a {
  text-decoration: none;
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
.content {
  display: flex;
  flex-direction: row;
  /* background-color: lightgreen; */
  width: 100%;
  height: 100vh;
}
.left-aside {
  /* background-color: brown; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: -2.1vw; */
}
.left-aside ul li {
  text-align: left;
  font-size: 4vw;
  text-decoration: none;
  list-style: none;
  font-family: "Nunito", sans-serif;
  line-height: 5vw;
}
.left-aside ul {
  margin-left: 4.8vw;
}
.left-aside a {
  color: white;
}
.left-aside li:hover {
  color: grey;
}
.right-aside {
  /* background-color: red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
}
.right-aside p,
.right-aside a {
  font-size: 4vw;
  font-family: "Nunito", sans-serif;
  text-align: left;
  color: white;
}
.right-aside a:hover {
  color: grey;
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
  .left-aside {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: -30vw;
  }
  .left-aside ul li {
    font-size: 11vw;
    text-align: center;
    margin-left: 0px;
    line-height: 15vw;
  }
  .left-aside ul {
    margin: 0px;
  }
  .right-aside {
    /* flex: 1;
    align-items: center;
    justify-content: center;
    width: 100vw; */
    display: none;
  }
}

#menuToggle {
  display: block;
  position: relative;
  top: 0;
  left: 5px;
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

#menuToggle input ~ span {
  opacity: 1;
  transform: rotate(-45deg) translate(-2px, -2.5px);
  background: white;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input ~ span:nth-last-child(2) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input ~ span:nth-last-child(3) {
  transform: rotate(45deg) translate(0, 0px);
}
</style>