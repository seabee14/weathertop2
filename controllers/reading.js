"use strict";

const logger = require("../utils/logger");
const playlistStore = require("../models/station-store");

const reading = {
  index(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Editing Reading ${readingId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Reading",
      station: stationStore.getStation(stationId),
      reading: stStore.getSong(playlistId, songId)
    };
    response.render("song", viewData);
  },

  update(request, response) {
    const playlistId = request.params.id;
    const songId = request.params.songid;
    const song = playlistStore.getSong(playlistId, songId)
    const newSong = {
      title: request.body.title,
      artist: request.body.artist,
      duration: Number(request.body.duration)
    };
    logger.debug(`Updating Song ${songId} from Playlist ${playlistId}`);
    playlistStore.updateSong(song, newSong);
    response.redirect("/playlist/" + playlistId);
  }
};

module.exports = song;