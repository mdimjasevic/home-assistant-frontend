import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";
import { HomeAssistant } from "../../../../src/types";

@customElement("hc-launch-screen")
class HcLaunchScreen extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @property() public error?: string;

  protected render(): TemplateResult {
    return html`
      <div class="container">
        <img
          alt="Nabu Casa logo on left, Home Assistant logo on right, and red heart in center"
          src="https://cast.home-assistant.io/images/nabu-loves-hass.png"
        />
        <div class="status">
          ${this.hass ? "Connected" : "Not Connected"}
          ${this.error ? html` <p>Error: ${this.error}</p> ` : ""}
        </div>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        height: 100vh;
        padding-top: 64px;
        background-color: white;
        font-size: 24px;
      }
      .container {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      img {
        width: 717px;
        height: 376px;
        display: block;
        margin: 0 auto;
      }
      .status {
        padding-right: 54px;
        padding-inline-end: 54px;
        padding-inline-start: initial;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hc-launch-screen": HcLaunchScreen;
  }
}
