
//funcion tomada de una libreria, creditos al autor debajo Yousuf Kalim

/**
 * Index file for the package
 * @author Yousuf Kalim
 */
// Distance calculation
export const getDistance = (lat: number, lng: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat); // deg2rad below
    const dLon = deg2rad(lng2 - lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };
  
  // Deg conversion
  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };
  
  // Validate the arguments
  const validateArgs = (lat: number, lng: number, arr: any[], asc: boolean): void => {
    if (
      isNaN(parseFloat(lat as unknown as string)) ||
      isNaN(parseFloat(lng as unknown as string)) ||
      !arr
    ) {
      throw new Error('Invalid arguments');
    }
    if (typeof lat !== 'number' || typeof lng !== 'number') {
      throw new Error('lat and lng should be numbers');
    }
    if (!Array.isArray(arr)) {
      throw new Error('Second argument should be an array');
    }
    if (typeof asc !== 'boolean') {
      throw new Error('Asc argument should be a boolean');
    }
  };
  
  /**
   * Sort the array according to the user's lat lng
   * @param lat {Number} - User's latitude
   * @param lng {Number} - User's lngitude
   * @param arr {Array} - Array of objects that contain lat and lng
   * @param asc {Boolean} - Ascending or descending order
   * @returns {Array} - Sorted array
   */
  const nearbySort = async (
    { lat, lng }: { lat: number; lng: number },
    arr: any[],
    asc = true,
  ): Promise<any[]> => {
    return await new Promise((resolve, reject) => {
      try {
        validateArgs(lat, lng, arr, asc);
        const sortedArray = arr.sort((a, b) => {
          const distanceA = getDistance(lat, lng, a.lat, a.lng);
          const distanceB = getDistance(lat, lng, b.lat, b.lng);
          return asc ? distanceA - distanceB : distanceB - distanceA;
        });
        resolve(sortedArray);
      } catch (err) {
        reject(err);
      }
    });
  };
  
  export default nearbySort;