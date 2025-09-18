const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Helper to send mock response
const sendMock = (res, obj) => {
  res.json(obj);
};

// ------------------- ROUTES -------------------

app.post('/IntegrationWServices/GetAccessToken', (req, res) => {
  sendMock(res, mockResponses.GetAccessToken);
});

app.post('/KYCWServices/StepVerifyPhone', (req, res) => {
  sendMock(res, mockResponses.StepVerifyPhone);
});

app.post('/KYCWServices/VerifyPhoneOtp', (req, res) => {
  sendMock(res, mockResponses.VerifyPhoneOtp);
});

app.post('/KYCWServices/StepVerifyEmail', (req, res) => {
  sendMock(res, mockResponses.StepVerifyEmail);
});

app.post('/KYCWServices/VerifyEmailWithOtp', (req, res) => {
  sendMock(res, mockResponses.VerifyEmailWithOtp);
});

app.post('/KYCWServices/StepCreate', (req, res) => {
  sendMock(res, mockResponses.StepCreate);
});

app.post('/KYCWServices/VerifyIDFrontVlens', (req, res) => {
  sendMock(res, mockResponses.VerifyIDFrontVlens);
});

app.post('/KYCWServices/VerifyIDBack', (req, res) => {
  sendMock(res, mockResponses.VerifyIDBack);
});

app.post('/KYCWServices/VerifyLiveness', (req, res) => {
  sendMock(res, mockResponses.VerifyLiveness);
});

app.post('/KYCWServices/GetKYCCibc', (req, res) => {
  sendMock(res, mockResponses.GetKYCCibc);
});

app.post('/KYCWServices/GetSourceOfIncome', (req, res) => {
  sendMock(res, mockResponses.GetSourceOfIncome);
});

app.post('/KYCWServices/GetInvesObjective', (req, res) => {
  sendMock(res, mockResponses.GetInvesObjective);
});

app.post('/KYCWServices/Getnationality', (req, res) => {
  sendMock(res, mockResponses.Getnationality);
});

app.post('/KYCWServices/InsertAttachments', (req, res) => {
  sendMock(res, mockResponses.InsertAttachments);
});

app.post('/KYCWServices/LoginVlens', (req, res) => {
  sendMock(res, mockResponses.LoginVlens);
});

app.post('/KYCWServices/GetAllRequestTypes', (req, res) => {
  sendMock(res, mockResponses.GetAllRequestTypes);
});

app.post('/KYCWServices/CreateBusinessRequest', (req, res) => {
  sendMock(res, mockResponses.CreateBusinessRequest);
});

app.post('/KYCWServices/GetCurrentListIds', (req, res) => {
  sendMock(res, mockResponses.GetCurrentListIds);
});

app.post('/KYCWServices/LoginAdmin', (req, res) => {
  sendMock(res, mockResponses.LoginAdmin);
});

app.post('/KYCWServices/ApproveOrRejectRequest', (req, res) => {
  sendMock(res, mockResponses.ApproveOrRejectRequest);
});

app.post('/KYCWServices/GetCurrentBusinessRequest', (req, res) => {
  sendMock(res, mockResponses.GetCurrentBusinessRequest);
});

app.post('/KYCWServices/ActivateBusinessRequest', (req, res) => {
  sendMock(res, mockResponses.ActivateBusinessRequest);
});

app.post('/KYCWServices/ValidateOtpBusinessRequest', (req, res) => {
  sendMock(res, mockResponses.ValidateOtpBusinessRequest);
});

// ------------------- START SERVER -------------------
app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});

// ------------------- MOCK RESPONSE OBJECTS -------------------

const mockResponses = {
  GetAccessToken: {
    Error_code: "0",
    resData: {
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      expires_in: 3600
    }
  },

  StepVerifyPhone: {
    Data: {
      IsPhoneNumberConfirmed: true,
      PhoneNumberOtpRequestId: "otp-request-12345",
      PhoneOtpExpireInSeconds: 300,
      TransactionId: "txn-67890"
    },
    ErrorCode: "0",
    ErrorMessage: "Success"
  },

  VerifyPhoneOtp: {
    ACTIONID: "action-111",
    AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    Data: {
      IsPhoneNumberConfirmed: true,
      PhoneNumberOtpRequestId: "otp-request-12345",
      PhoneOtpExpireInSeconds: 300,
      TransactionId: "txn-67890"
    },
    ErrorCode: "0",
    ErrorMessage: "OTP Verified Successfully",
    Request_Id: "req-222"
  },

  StepVerifyEmail: {
    Data: {
      EmailOtpExpireInSeconds: 300,
      EmailOtpRequestId: "email-otp-98765",
      IsEmailConfirmed: true,
      TransactionId: "txn-67890"
    },
    ErrorCode: "0",
    ErrorMessage: "Success"
  },

  VerifyEmailWithOtp: {
    Data: {
      EmailOtpExpireInSeconds: 300,
      EmailOtpRequestId: "email-otp-98765",
      IsEmailConfirmed: true,
      TransactionId: "txn-67890"
    },
    ErrorCode: "0",
    ErrorMessage: "OTP Verified Successfully"
  },

  StepCreate: {
    Data: {
      AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      IsEmailConfirmed: true,
      IsPhoneNumberConfirmed: true,
      RedirectUri: "https://example.com/redirect",
      TransactionId: "txn-12345",
      User: {
        EmailAddress: "john.doe@example.com",
        FullName: "John Doe",
        IdNumber: "ID123456789",
        Name: "John",
        PhoneNumber: "+1234567890",
        Surname: "Doe",
        UserName: "johndoe"
      }
    },
    ErrorCode: "0",
    ErrorMessage: "User Created Successfully"
  },

  VerifyIDFrontVlens: {
    TransactionId: "txn-55555",
    data: {
      deviceInfo: "DeviceXYZ v1.0",
      idBackData: {
        gender: "Male",
        husbandName: "N/A",
        idExpiry: "2026-01-01T00:00:00Z",
        idNumber: "ID123456789",
        job: "Engineer",
        jobTitle: "Senior Engineer",
        maritalStatus: "Single",
        releaseDate: "2020-01-01T00:00:00Z",
        religion: "None",
        transaction_id: "txn-55555"
      },
      idFrontData: {
        address: "123 Main St, Springfield",
        address_english: "123 Main St, Springfield",
        dateOfBirth: "1990-01-01T00:00:00Z",
        first_name: "John",
        first_name_english: "John",
        gender: "Male",
        govern: "Springfield",
        govern_english: "Springfield",
        idKey: "KEY123456",
        idNumber: "ID123456789",
        last_names: "Doe",
        last_names_english: "Doe",
        name: "John Doe",
        name_english: "John Doe",
        transaction_id: "txn-55555"
      },
      isDigitalIdentityVerified: true,
      isVerificationProcessCompleted: true,
      user: {
        address: "123 Main St, Springfield",
        emailAddress: "john.doe@example.com",
        fullName: "John Doe",
        id: 1001,
        idNumber: "ID123456789",
        name: "John",
        phoneNumber: "+1234567890",
        surname: "Doe",
        userName: "johndoe"
      }
    },
    error_code: "0",
    error_message: "Verification successful",
    services: {
      AML: {
        AML_matched: true
      },
      SRC: {
        errorCode: 0,
        errorKey: "None",
        errorMessage: "No errors",
        isValid: true
      },
      Validations: {
        validation_errors: []
      },
      classification: {
        doc_type: "National ID"
      },
      liveness: true,
      spoofing: {
        fake: false
      }
    }
  },

  VerifyIDBack: {
    TransactionId: "txn-55556",
    data: {
      deviceInfo: "DeviceXYZ v1.0",
      idBackData: {
        gender: "Male",
        husbandName: "N/A",
        idExpiry: "2026-01-01T00:00:00Z",
        idNumber: "ID123456789",
        job: "Engineer",
        jobTitle: "Senior Engineer",
        maritalStatus: "Single",
        releaseDate: "2020-01-01T00:00:00Z",
        religion: "None",
        transaction_id: "txn-55556"
      },
      idFrontData: {
        address: "123 Main St, Springfield",
        address_english: "123 Main St, Springfield",
        dateOfBirth: "1990-01-01T00:00:00Z",
        first_name: "John",
        first_name_english: "John",
        gender: "Male",
        govern: "Springfield",
        govern_english: "Springfield",
        idKey: "KEY123456",
        idNumber: "ID123456789",
        last_names: "Doe",
        last_names_english: "Doe",
        name: "John Doe",
        name_english: "John Doe",
        transaction_id: "txn-55556"
      },
      isDigitalIdentityVerified: true,
      isVerificationProcessCompleted: true,
      user: {
        address: "123 Main St, Springfield",
        emailAddress: "john.doe@example.com",
        fullName: "John Doe",
        id: 1001,
        idNumber: "ID123456789",
        name: "John",
        phoneNumber: "+1234567890",
        surname: "Doe",
        userName: "johndoe"
      }
    },
    error_code: "0",
    error_message: "Verification successful",
    services: {
      AML: {
        AML_matched: true
      },
      SRC: {
        errorCode: 0,
        errorKey: "None",
        errorMessage: "No errors",
        isValid: true
      },
      Validations: {
        validation_errors: []
      },
      classification: {
        doc_type: "National ID"
      },
      liveness: true,
      spoofing: {
        fake: false
      }
    }
  },

  VerifyLiveness: {
    Data: {
      DeviceInfo: "DeviceXYZ v1.0",
      IsDigitalIdentityVerified: true,
      IsVerificationProcessCompleted: true,
      User: {
        EmailAddress: "john.doe@example.com",
        FullName: "John Doe",
        Id: 1001,
        IdNumber: "ID123456789",
        Name: "John",
        PhoneNumber: "+1234567890",
        Surname: "Doe",
        UserName: "johndoe"
      }
    },
    ErrorCode: "0",
    ErrorMessage: "Liveness verified",
    Services: {
      AML: { AML_matched: true },
      SRC: {
        errorCode: 0,
        errorKey: "None",
        errorMessage: "No errors",
        isValid: true
      },
      Validations: {
        validation_errors: []
      },
      classification: {
        doc_type: "Liveness Check"
      },
      liveness: true,
      spoofing: {
        fake: false
      }
    }
  },

  GetKYCCibc: {
    Error_Msg: "",
    Error_code: "0"
  },

  GetSourceOfIncome: {
    ErrorMsg: "",
    Error_code: "0",
    Lang: "en",
    resData: [
      {
        SourceOfIncome: "Salary",
        value: "salary"
      },
      {
        SourceOfIncome: "Business",
        value: "business"
      }
    ]
  },

  GetInvesObjective: {
    ErrorMsg: "",
    Error_code: "0",
    Lang: "en",
    resData: [
      {
        Objective: "Capital Growth",
        value: "capital_growth"
      },
      {
        Objective: "Income",
        value: "income"
      }
    ]
  },

  Getnationality: {
    ErrorMsg: "",
    Error_code: "0",
    Lang: "en",
    resData: [
      {
        IsCitizen: "Yes",
        NationalityName: "American",
        Risk: "Low",
        value: "usa"
      },
      {
        IsCitizen: "No",
        NationalityName: "Canadian",
        Risk: "Medium",
        value: "canada"
      }
    ]
  },

  InsertAttachments: {
    ErrorMsg: ""
  },

  LoginVlens: {
    ACTION_ID: "action-789",
    Data: {
      AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      EmailOtpRequestId: "email-otp-123",
      EncryptedAccessToken: "encrypted-token-456",
      HasPendingRequest: true,
      IsDigitalIdentityVerified: true,
      IsPhoneNumberConfirmationRequired: true,
      IsPhoneNumberConfirmed: true,
      PhoneNumberOtp: "123456",
      PhoneNumberOtpRequestId: "phone-otp-789",
      PhoneOtpExpireInSeconds: 300,
      RedirectUri: "https://example.com/home",
      TransactionId: "txn-88888",
      User: {
        EmailAddress: "john.doe@example.com",
        FullName: "John Doe",
        IdNumber: "ID123456789",
        Name: "John",
        PhoneNumber: "+1234567890",
        Surname: "Doe",
        UserName: "johndoe"
      }
    },
    ErrorCode: "0",
    ErrorMessage: "Login successful",
    Request_Id: "req-999"
  },
    GetAllRequestTypes: {
    Error_code: "0",
    resData: [
      { id: 1, name: "Type A" },
      { id: 2, name: "Type B" },
      { id: 3, name: "Type C" }
    ]
  },

  CreateBusinessRequest: {
    Error_code: "0",
    ErrorMessage: "Business request created successfully",
    RequestId: "BR-123456",
    Status: "Pending"
  },

  GetCurrentListIds: {
    Error_code: "0",
    ListIds: [101, 102, 103, 104]
  },

  LoginAdmin: {
    Error_code: "0",
    ErrorMessage: "Admin login successful",
    AccessToken: "admin-token-123456",
    User: {
      Id: 999,
      UserName: "adminuser",
      Role: "Administrator"
    }
  },

  ApproveOrRejectRequest: {
    Error_code: "0",
    ErrorMessage: "Request has been processed",
    Status: "Approved"
  },

  GetCurrentBusinessRequest: {
    Error_code: "0",
    Request: {
      Id: "BR-123456",
      Status: "Pending",
      CreatedDate: "2025-09-18T10:00:00Z",
      RequestType: "Type A",
      User: {
        FullName: "John Doe",
        Email: "john.doe@example.com"
      }
    }
  },

  ActivateBusinessRequest: {
    Error_code: "0",
    ErrorMessage: "Business request activated successfully"
  },

  ValidateOtpBusinessRequest: {
    Error_code: "0",
    ErrorMessage: "OTP validated successfully",
    OtpStatus: "Valid"
  }

};
