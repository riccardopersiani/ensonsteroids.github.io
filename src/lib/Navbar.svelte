<script>
  // @ts-nocheck

  import { Route, Link } from "svelte-routing";
  import Home from "../routes/Home.svelte";
  import Nfts from "../routes/Nfts.svelte";
  import Expired from "../routes/Expired.svelte";
  import HallOfFame from "./HallOfFame.svelte";

  async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate();
      window.location.href = "/";
    }
  }
  async function logOut() {
    await Moralis.User.logOut();
    window.location.href = "/";
  }
</script>

<div id="navbar"
class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
>
  <div class="px-2 mx-2 navbar-start">
    <button class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-6 h-6 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold"> ENS on Steroids </span>
    </div>
  </div>

  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="items-stretch hidden lg:flex">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Countdown </a>
      <a href="/expired" class="btn btn-ghost btn-sm rounded-btn"> Expired </a>
      <a href="/nfts" class="btn btn-ghost btn-sm rounded-btn"> Your ENS </a>
      <a href="hall" class="btn btn-ghost btn-sm rounded-btn"> Hall Of Fame </a>
      <Link to="/">Home</Link>
      <Link to="expired">About</Link>
      <Link to="/expired">About</Link>
      <Link to="nfts">Blog</Link>
      <Link to="/nfts">/Blog</Link>
    </div>
  </div>

  <div class="navbar-end m-2">
    {#if Moralis.User.current()}
      <div class="badge badge-primary m-2">
        {Moralis.User.current().attributes.accounts[0]}
      </div>
      <a on:click={logOut} class="m-2 btn btn-ghost btn-sm rounded-btn">
        LogOut
      </a>
      <div class="flex-none">
        <div class="avatar">
          <div class="rounded-full w-lg h-lg m-1">
            <img
              src="https://publish.one37pm.net/wp-content/uploads/2021/02/punks.png?fit=600%2C600"
            />
          </div>
        </div>
      </div>
    {:else}
      <a on:click={login} class="btn btn-ghost btn-sm rounded-btn"> Login </a>
    {/if}
  </div>
</div>

<div>
  <Route path="/" component={Home} />
  <Route path="/nfts" component={Nfts} />
  <Route path="/expired" component={Expired} />
  <Route path="/hall" component={HallOfFame} />
</div>

<style lang="scss">
	@import './scss/breakpoints.scss';

	#navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;

		@include for-phone-only {
			padding: 40px 0 50px;
		}
	}
</style>
