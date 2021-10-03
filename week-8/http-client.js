/*
Title: Exercise 8.2
Author: Adam Rodgers
Date: 3 October 2021
Modified By: Adam Rodgers
Description: WhatABook2
Resources:
*/

export class HttpClient {
  async get(url, params = "") {
    // New URL object
    let urlObject = new URL(url);

    // Assign urlObject.search parameter to URLSearchParams
    let paramsObject = new URLSearchParams(params);
    urlObject.search = paramsObject;

    const res = await fetch(urlObject.toString(), {
      method: "GET",
    });

    // Return result as JSON
    return res.json();
  }
}
