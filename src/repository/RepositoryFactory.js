import AuthRepository from "./AuthRepository";
import InvoiceRepository from "./InvoiceRepository";
import IssuerRepository from "./IssuerRepository";
import ReceiverRepository from "./ReceiverRepository";

const repositories = {
  auth: AuthRepository,
  invoice: InvoiceRepository,
  issuer: IssuerRepository,
  receiver: ReceiverRepository,
};

export default {
  get: (name) => repositories[name],
};
