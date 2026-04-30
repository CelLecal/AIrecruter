const BASE_URL = "http://localhost:3000";

export const fetchNewCandidates = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/newCandidates`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchPrimarySelection = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/primarySelection`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchDocVerif = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/docVerif`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchReadyForRegis = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/readyForRegis`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchHiringFunnel = async () => {
  const response = await fetch(`${BASE_URL}/dashboard/hiringFunnel`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
