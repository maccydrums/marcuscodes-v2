<template>
  <div class="om">
    <div class="nav">
      <h1>
        Marcus
        <br />Andersson
      </h1>
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
      <h3>Om mig</h3>
      <div class="columns is-variable is-1 grid-xl">
        <div class="column">
          <figure class="image" style="marginTop: -25px;">
            <img src="../assets/marcus.jpg"/>
          </figure>
        </div>
        <figure class="column">
          <p class=header>Mitt namn är Marcus,</p>
          <p>
            Jag är en kreativ webbutvecklare och webbdesigner som bor
            i Växjö med fokus på att göra onlineupplevelser minnesvärda.<br/><br/>
            Jag började studera till frontendutvecklare hösten -18 och blev
            förälskad i både webbutveckling- och webbdesign ganska snabbt.
            Jag har ett år kvar på min utbildning och i höst så kommer jag att
            göra min praktik på digitalbyrån
            <a href="https://www.meetod.se/" target="_blank">Meetod</a> i Växjö.<br/><br/>
            Kolla gärna in min portfolio och hör av dig ifall du har några frågor
            eller bara vill bolla lite idéer. Och när det kommer till jobb så är
            utmaningar något jag välkomnar med öppna armar. Om du har en
            idé, skicka iväg ett mail till mig så hittar jag ett sätt att göra den
            till verklighet.
          </p>
          
          <figure class="social-media has-text-centered">
            <li class="pv3 ph2 ma0 link grow">
              <a href="https://twitter.com/maccydrums" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" size="3x" style="color: #38A1F3;" />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="http://www.instagram.com/marcusanderssson_" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  size="3x"
                  style="color: rgb(225, 52, 95);"
                />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="https://www.linkedin.com/in/marcus-andersson-78aa2316a/" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  size="3x"
                  style="color: rgb(13, 117, 181);"
                />
              </a>
            </li>
            <li class="pv3 ph2 ma0 link grow">
              <a href="http://www.github.com/maccydrums" target="_blank">
                <font-awesome-icon 
                :icon="['fab', 'github']"
                size="3x" 
                style="color: white;"
                />
              </a>
            </li>
          </figure>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "om",
  components: {}
};
</script>

<style scoped>
.om {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  /* margin-left: 60px; */
  font-size: 50px;
  font-family: 'hwt artz', sans-serif;
  color: black;
  text-align: left;
  line-height: 42px;
}
.content {
  width: 100%;
  font-size: 2.35vw;
  margin-top: 445px;
  min-height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #19232d;

}
.content h3 {
  font-family: "hwt artz", sans-serif;
  font-size: 7vw;
  align-self: flex-start;
  margin-top: -300px;
  margin-left: 5vw;
}

.nav {
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.columns {
  color: white;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 15px;
}
.columns .header {
  font-family: 'hwt artz', sans-serif;
  font-size: 3.5vw;
  color: black;
  margin-top: -100px;
}
.columns p {
  font-size: 22px;
  font-family: "Nunito", sans-serif;
  text-align: left;
  margin-top: -20px;
}
.columns p a {
  font-size: 22px;
  color: #01b5b4;
  font-weight: 600;
}
.social-media {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li a:hover {
  color: rgb(0, 0, 0);
}
li a {
  color: hsla(0, 0%, 20%, 1);
  font-size: 13px;
  /* color: rgba( 45, 55, 65, .85 );           ALTERNATIVE COLOR*/
  text-decoration: none;
}

#menuToggle {
  display: block;
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

@media screen and (max-width: 500px) {
  h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .columns {
    width: 98%;
    flex-direction: column;
  }
  .image {
    margin-bottom: 70px;
  }
  .content .header {
    font-size: 9vw;
    color: white;
  }
  .content {
    margin-top: 400px;
  }
  .content h3 {
    font-size: 10vw;
  }
  .social-media {
    margin-bottom: 22px;
  }
}
</style>