import React from "react";
import CarouselControlled from "../../../components/Carousel";

const hookSlides = [
  {
    id: "resolve-uri",
    title: "useAudios.ts: URI Resolution",
    summary:
      "Supports both remote URLs and local cached files so playback and sharing work across iOS/Android.",
    description: `const resolveAudioUri = useCallback((uri) => {
  if (!uri) return null;

  // file://, http://, https:// are returned directly
  if (/^[a-z]+:\/\//i.test(uri)) {
    return uri;
  }

  // relative API paths are resolved against BASE_URL
  return \`${"${BASE_URL}"}\${uri.startsWith("/") ? uri : \`/\${uri}\`}\`;
}, []);`,
  },
  {
    id: "cache-converted",
    title: "useAudios.ts: Converted Audio Caching",
    summary:
      "Downloaded conversion artifacts are cached locally for more reliable playback behavior on iOS.",
    description: `const convertedCacheDir = new Directory(Paths.cache, "converted-audio");
if (!convertedCacheDir.exists) {
  await convertedCacheDir.create({ idempotent: true });
}

const destinationFile = new File(convertedCacheDir, "converted.m4a");
const downloadedFile = await File.downloadFileAsync(resolvedUrl, destinationFile, {
  idempotent: true,
});

result.convertedAudioUri = downloadedFile.uri;`,
  },
  {
    id: "share-fix",
    title: "useLabScreen.ts: Share Logic Fix",
    summary:
      "Sharing now distinguishes local file:// URIs from remote URLs to avoid IllegalArgumentException on Android.",
    description: `const shareUri = /^[a-z]+:\/\//i.test(resolvedUrl) &&
  !resolvedUrl.startsWith("file://")
  ? (await File.downloadFileAsync(resolvedUrl, destinationFile, { idempotent: true })).uri
  : resolvedUrl;

await Sharing.shareAsync(shareUri, {
  dialogTitle: "Share converted audio",
  mimeType: fileExtension === "wav" ? "audio/wav" : "audio/m4a",
  UTI: "public.audio",
});`,
  },
];

const MobileHooksSection = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Mobile Hook Snippets
      </h4>
      <CarouselControlled
        wireframeslides={hookSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default MobileHooksSection;
