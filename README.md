# TransportStreamer

This is a simple Chrome extension used to effectively download transport stream videos. 

Instead of streaming a singular video file, websites such as Twitter will stream a series of smaller .ts files, each of which are about two seconds in length. This makes it easy for the server to adjust the quality of the videos on the fly to suit the network speed, but makes it tedious for people to download the videos.

This Chrome extension makes the process of downloading all the .ts files easy. Please note that this extension relies on the fact that most websites number their .ts files sequentailly.

To use this chrome extension to download .ts videos,
1. Using Chrome inspector, determine the URL of the .ts files
2. Strip the numerical sequencing and the .ts extension from the URL
3. Determine the number of .ts files which composes the video (the max)
4. Paste the URL, starting integer (typically 1), and the ending integer for the sequence of .ts files (the max).
5. Click download

To combine the .ts files into one, run the following commands in terminal, replacing i and j with the min and max number of the .ts sequence
```
echo 'name_of_ts_file'{i..j}.ts | tr " " "\n" > tslist
while read line; do cat $line >> name_of_output_video.ts; done < tslist
```