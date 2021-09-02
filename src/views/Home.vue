<script setup>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
import axios from "axios";
import { onMounted, ref } from "@vue/runtime-core";
let map;
let queryIp = ref("");
let ipInfo = ref(null);
const apiKey = "at_sPv2CtQVZZKILcQdlHCfacNikFFQP"; // Use Your Own instead
const mapboxToken =
  "pk.eyJ1IjoiZWZuaW5qYSIsImEiOiJja3QzaHdodW0wMGpuMm9wNzFkZmxqMWhxIn0.3VyMKEhaoPeVFYFD7vN1wg";

onMounted(() => {
  map = leaflet.map("mapid").setView([27.2046, 77.4977], 9);
  leaflet
    .tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: `${mapboxToken}`
      }
    )
    .addTo(map);
});
// Get Ip information from Api

const getIpInfo = async () => {
  try {
    const response = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${queryIp.value}`
    );
    console.log(response);
    const result = response.data;
    ipInfo.value = {
      address: result.ip,
      state: result.location.region,
      timezone: result.location.timezone,
      isp: result.isp,
      lat: result.location.lat,
      lng: result.location.lng
    };
    leaflet.marker([result.location.lat, result.location.lng]).addTo(map);
    map.setView([result.location.lat, result.location.lng], 13);
  } catch (err) {
    alert(err.message);
  }
};
</script>
<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results -->
    <div
      class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <!-- Search Input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIp"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <i
            @click="getIpInfo"
            class="flex items-center px-4 bg-black text-white rounded-tr-md rounded-br-md pb-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </i>
        </div>
      </div>
      <!-- IP Info -->
      <IPInfo v-if="ipInfo" :ipInfo="ipInfo" />
    </div>
    <!-- Map -->
    <div class="z-10 h-full" id="mapid"></div>
  </div>
</template>
