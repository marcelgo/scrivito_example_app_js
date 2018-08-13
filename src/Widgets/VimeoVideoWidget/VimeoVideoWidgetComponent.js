import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class VimeoVideoWidgetComponent extends React.Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          position: "relative",
          paddingTop: `${100 * this.aspectRatio()}%`,
        }}
      >
        <PlaceholderOrVimeoComponent
          vimeoVideoId={this.props.widget.get("vimeoVideoId")}
        />
      </div>
    );
  }

  aspectRatio() {
    switch (this.props.widget.get("aspectRatio")) {
      case "21:9":
        return 9 / 21;
      case "16:9":
        return 9 / 16;
      case "4:3":
        return 3 / 4;
      case "1:1":
        return 1;
      case "3:4":
        return 4 / 3;
      case "9:16":
        return 16 / 9;
      default:
        return 9 / 16;
    }
  }
}

function PlaceholderOrVimeoComponent({ vimeoVideoId }) {
  if (!vimeoVideoId) {
    return (
      <InPlaceEditingPlaceholder>
        Provide a Vimeo video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoVideoId}`}
      className="fullsize-iframe"
      frameBorder="0"
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  );
}

Scrivito.provideComponent("VimeoVideoWidget", VimeoVideoWidgetComponent);
