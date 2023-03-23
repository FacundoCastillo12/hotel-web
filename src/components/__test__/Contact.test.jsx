import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageContextProvider, {
  LanguageContext,
} from "@/utils/contexts/contextLanguage";
import Contact from "../Contact";

describe("Contact", () => {
  it("render contact with language context", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Contact />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Contact us"
    );
    const phoneNumber = screen.getByText("+0264123456");
    expect(phoneNumber).toHaveTextContent("+0264123456");
    expect(screen.getByText("Phone Number")).toBeVisible();
    expect(screen.getByText("hotel@gmail.com")).toBeVisible();
    expect(screen.getByText("Av. 9 de Julio")).toBeVisible();
    expect(screen.getByText("Bug report")).toBeVisible();
    const githubLink = screen.getByText("Github");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/FacundoCastillo12/hotel-web/issues"
    );
  });
  it("render contact form", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Contact />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const nameInput = screen.getByLabelText("Name");
    const subjectInput = screen.getByLabelText("Subject");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");
    const submitButton = screen.getByText("Send");

    expect(nameInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("invalid value for the input", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Contact />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, {
      target: { value: "Facundo Castillo12312<" },
    });
    const subjectInput = screen.getByLabelText("Subject");
    fireEvent.change(subjectInput, { target: { value: ">failtest1>" } });
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test" } });
    const messageInput = screen.getByLabelText("Message");
    fireEvent.change(messageInput, { target: { value: "<{fail}>" } });

    expect(
      screen.getByText(
        /Two words with 20 characters maximum with no numbers or extraneous characters/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        / Three words with twenty characters maximum, no numbers or extraneous characters/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rules: Enter a valid email address./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Rules: No strange characters and 200 characters maximum allowed./i
      )
    ).toBeInTheDocument();
  });
  it("invalid value for the message 200 character", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Contact />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );

    const messageInput = screen.getByLabelText("Message");
    fireEvent.change(messageInput, {
      target: {
        value:
          "Maecenas vitae lorem in neque fringilla auctor. Sed fringilla nibh efficitur, accumsan ligula ac, accumsan ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer porta mauris sed semper fringilla. Morbi mattis mauris vitae eleifend sagittis. Quisque lacinia accumsan magna, eu laoreet urna vestibulum vel. Suspendisse at justo pharetra, blandit sem ut, varius ipsum. Donec feugiat varius erat. Nam at accumsan eros. Sed varius ornare mauris, vitae facilisis risus semper eget. ",
      },
    });

    expect(
      screen.getByText(
        /Rules: No strange characters and 200 characters maximum allowed./i
      )
    ).toBeInTheDocument();
  });
  it("valid value for the input", () => {
    render(
      <LanguageContextProvider>
        <LanguageContext.Consumer>{() => <Contact />}</LanguageContext.Consumer>
      </LanguageContextProvider>
    );
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Facundo Castillo" } });
    const subjectInput = screen.getByLabelText("Subject");
    fireEvent.change(subjectInput, { target: { value: "Reservar test" } });
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const messageInput = screen.getByLabelText("Message");
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    expect(nameInput).toHaveClass("focus:border-green-500");
    expect(subjectInput).toHaveClass("focus:border-green-500");
    expect(emailInput).toHaveClass("focus:border-green-500");
    expect(messageInput).toHaveClass("focus:border-green-500");
  });
});
