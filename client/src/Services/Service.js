export const fetchProgramsPagination = async (start = 1, end = 3) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_baseUrl}programs?page=${start}&limit=${end}`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getTrack = async (trackId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_baseUrl}tracks/${trackId}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getProgram = async (programId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_baseUrl}programs/${programId}`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
