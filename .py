def playVideo(videoName: srt): pass
def inList(name: str) -> bool: pass
if inList("video.mp4"):
    playVideo("video.mp4")
elif inList("video.update.mp4"):
    playVideo("video.update.mp4")
else:
    print("你的浏览器不支持展示该视频")
