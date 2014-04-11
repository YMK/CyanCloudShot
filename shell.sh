Xvfb :99 > /dev/null &
makeGif() {
	timeout $1 node app.js $2 $3
	convert -delay 100 $3*.png -loop 0 $3.gif
}
makeGif 12h "https://www.ingress.com/intel?ll=55.868341,-4.279818&z=15" "clusterOne" &
makeGif 12h "https://www.ingress.com/intel?ll=55.864343,-4.262201&z=15" "clusterTwo" &
makeGif 12h "https://www.ingress.com/intel?ll=55.862007,-4.255914&z=15" "clusterThree" &
makeGif 12h "https://www.ingress.com/intel?ll=55.860628,-4.246923&z=16" "clusterFour" &
makeGif 12h "https://www.ingress.com/intel?ll=55.860875,-4.261729&z=14" "overall" &
