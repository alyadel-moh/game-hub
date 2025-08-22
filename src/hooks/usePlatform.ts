import usePlatforms from './usePlatforms';
const usePlatform = (platformid? : number) => {
const { data } = usePlatforms();
  return data?.results.find((p) => p.id === platformid);
}

export default usePlatform