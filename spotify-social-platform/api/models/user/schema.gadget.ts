import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://spotify-social-platform.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "b2qTCe30C2eY",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "yWGMFzmOCweF",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "m2-u-pcnaMFj",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "5tx55oX-iZ8B",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "GAVBSpQIndWw",
    },
    firstName: { type: "string", storageKey: "nuhI76c2oC_n" },
    googleImageUrl: { type: "url", storageKey: "jZIzz-xu2Ltm" },
    googleProfileId: { type: "string", storageKey: "9OWZpE5oAt6G" },
    lastName: { type: "string", storageKey: "zn7Xqr344v7L" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "hjTVaQhffcBx",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "ABrvDNLg7l7F",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "AhRga5_y--pV",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Gp6PpZ7lqXLd",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "QZiiyrQR2Vl9",
    },
  },
};
